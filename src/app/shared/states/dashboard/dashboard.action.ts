import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
  LOAD_DASHBOARD = '[Dashboard] Load Dashboard',
  LOAD_DASHBOARD_SUCCESS = '[Dashboard] Load Dashboard Success',
  SIDE_BAR_TOGGLED = '[Dashboard] Toggle Side Bar'
}

export class LoadDashboardAction implements Action {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD;
}

export class LoadDashboardSuccessAction implements Action {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD_SUCCESS;
}

export class SideBarToggledAction implements Action {
  readonly type = DashboardActionTypes.SIDE_BAR_TOGGLED;
}

export type DashboardActions =
  | LoadDashboardAction
  | LoadDashboardSuccessAction
  | SideBarToggledAction;
