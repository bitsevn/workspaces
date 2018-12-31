export enum PresentationMode {
  WORKSPACE = 0,
  BOOKMARK = 1,
  CHART = 2
}

export enum ActionType {
  VIEW = 1,
  EDIT = 2
}

export interface IDashboard {
  workspaceId?: number;
  bookmarkId?: number;
  chartId?: number;
  action?: ActionType;
}

export interface IDashboardState {
  dashboard: IDashboard;
  loading: boolean;
  loaded: boolean;
}
