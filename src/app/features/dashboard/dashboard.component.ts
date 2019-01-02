import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { GridsterComponent } from 'angular-gridster2';
import { combineLatest, Observable } from 'rxjs';
import { IStore } from 'src/app/shared/interfaces/store.interface';
import { ActionType } from 'src/app/shared/states/search-criteria/search-criteria.interface';
import * as fromSearchCriteria from 'src/app/shared/states/search-criteria/search-criteria.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(GridsterComponent) layoutGrid: GridsterComponent;

  workspaceContext$: Observable<{ workspaceId: number; actionType: ActionType }>;
  bookmarkContext$: Observable<{ bookmarkId: number; chartId: number; actionType: ActionType }>;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    const actionType$ = this.store.select(fromSearchCriteria.getActionType);
    const workspaceId$ = this.store.select(fromSearchCriteria.getWorkspaceId);
    this.workspaceContext$ = combineLatest(
      workspaceId$,
      actionType$,
      (workspaceId, actionType) => ({
        workspaceId,
        actionType
      })
    );

    const bookmarkId$ = this.store.select(fromSearchCriteria.getBoomarkId);
    const chartId$ = this.store.select(fromSearchCriteria.getChartId);
    this.bookmarkContext$ = combineLatest(
      bookmarkId$,
      chartId$,
      actionType$,
      (bookmarkId, chartId, actionType) => ({ bookmarkId, chartId, actionType })
    );
  }
}
