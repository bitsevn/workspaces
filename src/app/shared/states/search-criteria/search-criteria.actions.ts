import { Action } from '@ngrx/store';

export enum SearchCriteriaActionTypes {
  BOOKMARK_CHANGED = '[SearchCriteria] SearchCriterias Bookmark Changed',
  INDEX_CHANGED = '[SearchCriteria] SearchCriterias Index Changed',
  CLIENT_CHANGED = '[SearchCriteria] SearchCriterias Client Changed',
  TIME_PERIOD_CHANGED = '[SearchCriteria] SearchCriterias Time Period Changed',
  DATES_CHANGED = '[SearchCriteria] SearchCriterias Date Range Changed'
}

export class BookmarkChangedAction implements Action {
  readonly type = SearchCriteriaActionTypes.BOOKMARK_CHANGED;
  constructor(public bookmarkId: number) {}
}

export class IndexChangedAction implements Action {
  readonly type = SearchCriteriaActionTypes.INDEX_CHANGED;
  constructor(public indexId: number) {}
}

export class ClientChangedAction implements Action {
  readonly type = SearchCriteriaActionTypes.CLIENT_CHANGED;
  constructor(public clientId: number) {}
}

export class TimePeriodChangedAction implements Action {
  readonly type = SearchCriteriaActionTypes.TIME_PERIOD_CHANGED;
  constructor(public timePeriod: number | string) {}
}

export class DateRangeChangedAction implements Action {
  readonly type = SearchCriteriaActionTypes.DATES_CHANGED;
  constructor(public startDate: number, public endDate: number) {}
}

export type SearchCriteriaActions =
  | BookmarkChangedAction
  | IndexChangedAction
  | ClientChangedAction
  | TimePeriodChangedAction
  | DateRangeChangedAction;
