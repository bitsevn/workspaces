import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchCriteriaActions, SearchCriteriaActionTypes } from './search-criteria.actions';
import { ISearchCriteriaState } from './search-criteria.interface';

export const initialState: ISearchCriteriaState = {
  userId: 'arunku@ms.com',
  workspaceId: 100,
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
        workspaceId: action.workspaceId
      };
    }

    case SearchCriteriaActionTypes.BOOKMARK_CHANGED: {
      return {
        ...state,
        bookmarkId: action.bookmarkId
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
export const getSearching = createSelector(
  getSearchCriteriaState,
  state => state.searching
);
