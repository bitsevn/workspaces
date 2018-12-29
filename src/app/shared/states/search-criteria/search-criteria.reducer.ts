import { SearchCriteriaActions, SearchCriteriaActionTypes } from './search-criteria.actions';
import { ISearchCriteriaState } from './search-criteria.interface';

export const initialState: ISearchCriteriaState = {
  userId: 'arunku@ms.com'
};

export function reducer(state = initialState, action: SearchCriteriaActions): ISearchCriteriaState {
  switch (action.type) {
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

    default:
      return state;
  }
}
