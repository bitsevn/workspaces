import { Action } from '@ngrx/store';
import { ActionType } from './dashboard.interface';

export enum DashboardActionTypes {
  LOAD_WORKSPACE = '[Dashboard] Load Workspace',
  LOAD_BOOKMARK = '[Dashboard] Load Bookmark',
  LOAD_CHART = '[Dashboard] Load Chart',
  LOAD_DASHBOARD = '[Dashboard] Load Dashboard',
  LOAD_DASHBOARD_SUCCESS = '[Dashboard] Load Dashboard Success'
}

export class LoadWorkspaceAction implements Action {
  readonly type = DashboardActionTypes.LOAD_WORKSPACE;
  constructor(public workspaceId: number, public action: ActionType) {}
}

export class LoadBookmarkAction implements Action {
  readonly type = DashboardActionTypes.LOAD_BOOKMARK;
  constructor(public bookmarkId: number, public action: ActionType) {}
}

export class LoadChartAction implements Action {
  readonly type = DashboardActionTypes.LOAD_CHART;
  constructor(public bookmarkId: number, public chartId: number, public action: ActionType) {}
}

export class LoadDashboardAction implements Action {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD;
}

export class LoadDashboardSuccessAction implements Action {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD_SUCCESS;
}

export type DashboardActions =
  | LoadWorkspaceAction
  | LoadBookmarkAction
  | LoadChartAction
  | LoadDashboardAction
  | LoadDashboardSuccessAction;
