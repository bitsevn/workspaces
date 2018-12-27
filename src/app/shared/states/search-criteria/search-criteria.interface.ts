export interface ISearchCriteria {
  userId?: string;
  clientId?: number;
  bookmarkId?: number;
  indexId?: number | string;
  accounts?: number[] | string[];
  timePeriod?: number | string;
  startDate?: number; // YYYYMMDD
  endDate?: number; // YYYYMMDD
  isSearching?: boolean;
}

export interface ISearchCriteriaState extends ISearchCriteria {}
