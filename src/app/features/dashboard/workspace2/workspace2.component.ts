import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { DisplayGrid, GridsterComponent, GridsterConfig, GridType } from 'angular-gridster2';
import { IStore } from 'src/app/shared/interfaces/store.interface';
import * as fromDashboard from 'src/app/shared/states/dashboard/dashboard.reducer';
import { ILayout } from 'src/app/shared/states/layouts/layouts.interface';
import * as fromLayouts from 'src/app/shared/states/layouts/layouts.reducer';
import { ActionType } from 'src/app/shared/states/search-criteria/search-criteria.interface';
import { IWorkspace } from 'src/app/shared/states/workspaces/workspaces.interface';
import * as fromWorkspaces from 'src/app/shared/states/workspaces/workspaces.reducer';

@Component({
  selector: 'app-workspace2',
  templateUrl: './workspace2.component.html',
  styleUrls: ['./workspace2.component.scss']
})
export class Workspace2Component implements OnInit, OnChanges {
  @ViewChild(GridsterComponent) layoutGrid: GridsterComponent;
  @Input() workspaceId: number;
  @Input() actionType: ActionType;

  loading = false;
  workspace: IWorkspace;
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
    this.renderWorkspace();
    this.store.select(fromDashboard.getSideBarToggle).subscribe(toggle => {
      console.log('side bar open', toggle);
      if (this.options.api) {
        this.options.api.resize();
      }
    });
  }

  ngOnChanges() {
    this.renderWorkspace();
  }

  renderWorkspace() {
    this.loading = true;
    this.store.select(fromWorkspaces.getWorkspaceById(this.workspaceId)).subscribe(workspace => {
      this.workspace = workspace;
      this.store.select(fromLayouts.getLayoutById(this.workspace.layoutId)).subscribe(layout => {
        this.layout = this.getNextLayout(layout);
        setTimeout(() => (this.loading = false), 1000);
      });
    });
  }

  getNextLayout(originalLayout: ILayout): ILayout {
    const layoutNext: ILayout = this.clone(originalLayout);
    layoutNext.sections.forEach(section => {
      const workspaceSection = this.workspace.layoutSectionMappings.find(
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
