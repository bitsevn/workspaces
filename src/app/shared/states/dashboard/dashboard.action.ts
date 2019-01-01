import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
  LOAD_DASHBOARD = '[Dashboard] Load Dashboard',
  LOAD_DASHBOARD_SUCCESS = '[Dashboard] Load Dashboard Success'
}

export class LoadDashboardAction implements Action {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD;
}

export class LoadDashboardSuccessAction implements Action {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD_SUCCESS;
}

export type DashboardActions = LoadDashboardAction | LoadDashboardSuccessAction;
