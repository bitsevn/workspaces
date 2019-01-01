export enum ActionType {
  VIEW = 1,
  EDIT = 2
}

export interface ISearchCriteria {
  userId?: string;
  workspaceId: number;
  clientId?: number;
  bookmarkId?: number;
  chartId?: number;
  indexId?: number | string;
  accounts?: number[] | string[];
  timePeriod?: number | string;
  startDate?: number; // YYYYMMDD
  endDate?: number; // YYYYMMDD
  error?: any;
  actionType?: ActionType;
}

export interface ISearchCriteriaState extends ISearchCriteria {
  searching?: boolean;
}
