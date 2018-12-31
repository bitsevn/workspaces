import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DisplayGrid, GridsterConfig, GridType } from 'angular-gridster2';
import { Observable } from 'rxjs';
import { IStore } from 'src/app/shared/interfaces/store.interface';
import * as fromDashboardActions from 'src/app/shared/states/dashboard/dashboard.action';
import { ActionType, IDashboard } from 'src/app/shared/states/dashboard/dashboard.interface';
import * as fromDashboard from 'src/app/shared/states/dashboard/dashboard.reducer';
import { ILayout } from 'src/app/shared/states/layouts/layouts.interface';
import * as fromLayouts from 'src/app/shared/states/layouts/layouts.reducer';
import { IWorkspace } from 'src/app/shared/states/workspaces/workspaces.interface';
import * as fromWorkspace from 'src/app/shared/states/workspaces/workspaces.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  dashboard: IDashboard;
  action: ActionType;
  layout: ILayout;
  options: GridsterConfig;

  constructor(private store: Store<IStore>) {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      scrollToNewItems: false,
      disableWarnings: false,
      ignoreMarginInRow: false,
      mobileBreakpoint: 100,
      margin: 4
    };
  }

  ngOnInit() {
    this.store.select(fromDashboard.getDashboard).subscribe(dashboard => {
      this.dashboard = dashboard;
      this.action = dashboard.action;
      console.log('dashboard', this.dashboard);
      console.log('action', this.action);
      if (dashboard.workspaceId) {
        this.renderWorkspace();
      } else if (dashboard.bookmarkId) {
        this.renderBookmarkOrChart();
      }
    });

    this.loading$ = this.store.select(fromDashboard.getLoading);
    this.loaded$ = this.store.select(fromDashboard.getLoaded);
  }

  renderBookmarkOrChart(): any {
    this.store.select(fromLayouts.getDefaultLayout).subscribe(layout => {
      const layoutNext: ILayout = this.getNewObject(layout);
      layoutNext.sections.forEach(section => {
        section = {
          ...section,
          chartId: this.dashboard.chartId,
          bookmarkId: this.dashboard.bookmarkId
        };
      });
      return layoutNext;
    });
  }

  renderWorkspace(): any {
    this.store
      .select(fromWorkspace.getWorkspaceById(this.dashboard.workspaceId))
      .subscribe(workspace => {
        this.store.select(fromLayouts.getLayoutById(workspace.layoutId)).subscribe(layout => {
          this.layout = this.getNextLayout(layout, workspace);
          console.log('next layout', layout);
          setTimeout(() => {
            this.store.dispatch(new fromDashboardActions.LoadDashboardSuccessAction());
          }, 1000);
        });
      });
  }

  getNextLayout(originalLayout: ILayout, workspace: IWorkspace): ILayout {
    const layoutNext: ILayout = this.getNewObject(originalLayout);
    layoutNext.sections.forEach(section => {
      const workspaceSection = workspace.layoutSectionMappings.find(
        m => m.layoutSectionId === section.id
      );
      section = {
        ...section,
        chartId: workspaceSection.chartId,
        bookmarkId: workspaceSection.bookmarkId
      };
    });
    return layoutNext;
  }

  private getNewObject(originalLayout: ILayout): ILayout {
    return JSON.parse(JSON.stringify(originalLayout));
  }
}
