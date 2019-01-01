import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchCriteriaActions, SearchCriteriaActionTypes } from './search-criteria.actions';
import { ActionType, ISearchCriteriaState } from './search-criteria.interface';

export const initialState: ISearchCriteriaState = {
  userId: 'arunku@ms.com',
  workspaceId: 100,
  bookmarkId: null,
  chartId: null,
  actionType: ActionType.VIEW,
  clientId: 100,
  indexId: 1,
  timePeriod: 'YTD',
  searching: false
};

export function reducer(state = initialState, action: SearchCriteriaActions): ISearchCriteriaState {
  switch (action.type) {
    case SearchCriteriaActionTypes.WORKSPACE_CHANGED: {
      return {
        ...state,
        workspaceId: action.workspaceId,
        bookmarkId: null,
        chartId: null,
        actionType: ActionType.VIEW
      };
    }

    case SearchCriteriaActionTypes.BOOKMARK_CHANGED: {
      return {
        ...state,
        workspaceId: null,
        bookmarkId: action.bookmarkId,
        actionType: action.actionType ? action.actionType : ActionType.VIEW
      };
    }

    case SearchCriteriaActionTypes.CLIENT_CHANGED: {
      return {
        ...state,
        clientId: action.clientId
      };
    }

    case SearchCriteriaActionTypes.INDEX_CHANGED: {
      return {
        ...state,
        indexId: action.indexId
      };
    }

    case SearchCriteriaActionTypes.TIME_PERIOD_CHANGED: {
      return {
        ...state,
        timePeriod: action.timePeriod
      };
    }

    case SearchCriteriaActionTypes.DATES_CHANGED: {
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate
      };
    }

    case SearchCriteriaActionTypes.START_SEARCH: {
      return {
        ...state,
        searching: true,
        error: null
      };
    }

    case SearchCriteriaActionTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        searching: false,
        error: null
      };
    }

    case SearchCriteriaActionTypes.SEARCH_FAIL: {
      return {
        ...state,
        searching: false,
        error: action.error
      };
    }

    default:
      return state;
  }
}

export const getSearchCriteriaState = createFeatureSelector<ISearchCriteriaState>('searchCriteria');

export const getWorkspaceId = createSelector(
  getSearchCriteriaState,
  state => state.workspaceId
);
export const getClientId = createSelector(
  getSearchCriteriaState,
  state => state.clientId
);
export const getIndexId = createSelector(
  getSearchCriteriaState,
  state => state.indexId
);
export const getTimePeriodId = createSelector(
  getSearchCriteriaState,
  state => state.timePeriod
);
export const getBoomarkId = createSelector(
  getSearchCriteriaState,
  state => state.bookmarkId
);
export const getChartId = createSelector(
  getSearchCriteriaState,
  state => state.chartId
);
export const getActionType = createSelector(
  getSearchCriteriaState,
  state => state.actionType
);
export const getSearching = createSelector(
  getSearchCriteriaState,
  state => state.searching
);
