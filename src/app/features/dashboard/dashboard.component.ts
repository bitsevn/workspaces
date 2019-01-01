import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { DisplayGrid, GridsterComponent, GridsterConfig, GridType } from 'angular-gridster2';
import { combineLatest, Observable } from 'rxjs';
import { IStore } from 'src/app/shared/interfaces/store.interface';
import * as fromDashboardActions from 'src/app/shared/states/dashboard/dashboard.action';
import * as fromDashboard from 'src/app/shared/states/dashboard/dashboard.reducer';
import { ILayout } from 'src/app/shared/states/layouts/layouts.interface';
import * as fromLayouts from 'src/app/shared/states/layouts/layouts.reducer';
import { ActionType } from 'src/app/shared/states/search-criteria/search-criteria.interface';
import * as fromSearchCriteria from 'src/app/shared/states/search-criteria/search-criteria.reducer';
import { IWorkspace } from 'src/app/shared/states/workspaces/workspaces.interface';
import * as fromWorkspaces from 'src/app/shared/states/workspaces/workspaces.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(GridsterComponent) layoutGrid: GridsterComponent;

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  workspaceContext: IWorkspace;
  bookmarkContext: { bookmarkId: number; chartId: number; actionType: ActionType };
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
    this.store.select(fromSearchCriteria.getWorkspaceId).subscribe(workspaceId => {
      this.store.select(fromWorkspaces.getWorkspaceById(workspaceId)).subscribe(workspace => {
        this.workspaceContext = workspace;
        if (workspace) {
          this.renderWorkspace();
          this.bookmarkContext = null;
        } else {
          this.workspaceContext = null;
          const bookmarkId$ = this.store.select(fromSearchCriteria.getBoomarkId);
          const chartId$ = this.store.select(fromSearchCriteria.getChartId);
          const actionType$ = this.store.select(fromSearchCriteria.getActionType);
          const bookmarkContext$ = combineLatest(
            bookmarkId$,
            chartId$,
            actionType$,
            (bookmarkId, chartId, actionType) => ({ bookmarkId, chartId, actionType })
          );
          bookmarkContext$.subscribe(context => (this.bookmarkContext = context));
        }
      });
    });

    this.loading$ = this.store.select(fromDashboard.getLoading);
    this.loaded$ = this.store.select(fromDashboard.getLoaded);
    console.log('layoutGrid', this.layoutGrid);
  }

  renderBookmarkOrChart(): any {
    this.store.select(fromLayouts.getDefaultLayout).subscribe(layout => {
      const layoutNext: ILayout = this.clone(layout);
      layoutNext.sections.forEach(section => {
        section = {
          ...section,
          chartId: this.bookmarkContext.chartId,
          bookmarkId: this.bookmarkContext.bookmarkId
        };
      });
      return layoutNext;
    });
  }

  renderWorkspace(): any {
    this.store
      .select(fromLayouts.getLayoutById(this.workspaceContext.layoutId))
      .subscribe(layout => {
        this.layout = this.getNextLayout(layout);
        console.log('next layout', layout);
        setTimeout(() => {
          this.store.dispatch(new fromDashboardActions.LoadDashboardSuccessAction());
        }, 1000);
      });
  }

  getNextLayout(originalLayout: ILayout): ILayout {
    const layoutNext: ILayout = this.clone(originalLayout);
    layoutNext.sections.forEach(section => {
      const workspaceSection = this.workspaceContext.layoutSectionMappings.find(
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

  private clone(object: ILayout): ILayout {
    return JSON.parse(JSON.stringify(object));
  }
}
