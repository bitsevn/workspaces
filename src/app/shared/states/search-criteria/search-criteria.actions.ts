import { Action } from '@ngrx/store';
import { ActionType } from './search-criteria.interface';

export enum SearchCriteriaActionTypes {
  WORKSPACE_CHANGED = '[SearchCriteria] Workspace Changed',
  BOOKMARK_CHANGED = '[SearchCriteria] Bookmark Changed',
  INDEX_CHANGED = '[SearchCriteria] Index Changed',
  CLIENT_CHANGED = '[SearchCriteria] Client Changed',
  TIME_PERIOD_CHANGED = '[SearchCriteria] Time Period Changed',
  DATES_CHANGED = '[SearchCriteria] Date Range Changed',
  START_SEARCH = '[SearchCriteria] Start Search',
  SEARCH_SUCCESS = '[SearchCriteria] Search Success',
  SEARCH_FAIL = '[SearchCriteria] Search Fail'
}

export class WorkspaceChangedAction implements Action {
  readonly type = SearchCriteriaActionTypes.WORKSPACE_CHANGED;
  constructor(public workspaceId: number) {}
}
export class BookmarkChangedAction implements Action {
  readonly type = SearchCriteriaActionTypes.BOOKMARK_CHANGED;
  constructor(public bookmarkId: number, public actionType?: ActionType) {}
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

export class StartSearchAction implements Action {
  readonly type = SearchCriteriaActionTypes.START_SEARCH;
}

export class SearchSuccessAction implements Action {
  readonly type = SearchCriteriaActionTypes.SEARCH_SUCCESS;
  constructor(public payload: any) {}
}

export class SearchFailAction implements Action {
  readonly type = SearchCriteriaActionTypes.SEARCH_FAIL;
  constructor(public error: any) {}
}
export type SearchCriteriaActions =
  | WorkspaceChangedAction
  | BookmarkChangedAction
  | IndexChangedAction
  | ClientChangedAction
  | TimePeriodChangedAction
  | DateRangeChangedAction
  | StartSearchAction
  | SearchSuccessAction
  | SearchFailAction;
