export interface ISearchCriteria {
  userId?: string;
  workspaceId: number;
  clientId?: number;
  bookmarkId?: number;
  indexId?: number | string;
  accounts?: number[] | string[];
  timePeriod?: number | string;
  startDate?: number; // YYYYMMDD
  endDate?: number; // YYYYMMDD
  error?: any;
}

export interface ISearchCriteriaState extends ISearchCriteria {
  searching?: boolean;
}
