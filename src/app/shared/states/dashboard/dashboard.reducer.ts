import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardActions, DashboardActionTypes } from './dashboard.action';
import { ActionType, IDashboardState } from './dashboard.interface';

const initialState: IDashboardState = {
  dashboard: {
    action: ActionType.VIEW,
    bookmarkId: null,
    chartId: null,
    workspaceId: 100
  },
  loading: true,
  loaded: false
};

export function reducer(state = initialState, action: DashboardActions): IDashboardState {
  switch (action.type) {
    case DashboardActionTypes.LOAD_WORKSPACE: {
      return {
        ...state,
        loading: false,
        dashboard: {
          ...state.dashboard,
          workspaceId: action.workspaceId,
          action: action.action,
          bookmarkId: null,
          chartId: null
        }
      };
    }
    case DashboardActionTypes.LOAD_BOOKMARK: {
      return {
        ...state,
        loading: false,
        dashboard: {
          ...state.dashboard,
          action: action.action,
          workspaceId: null,
          bookmarkId: action.bookmarkId,
          chartId: null
        }
      };
    }
    case DashboardActionTypes.LOAD_CHART: {
      return {
        ...state,
        loading: false,
        dashboard: {
          ...state.dashboard,
          action: action.action,
          workspaceId: null,
          bookmarkId: null,
          chartId: action.chartId
        }
      };
    }

    case DashboardActionTypes.LOAD_DASHBOARD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case DashboardActionTypes.LOAD_DASHBOARD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    default:
      return state;
  }
}

export const getDashboardState = createFeatureSelector<IDashboardState>('dashboard');

export const getLoading = createSelector(
  getDashboardState,
  state => state.loading
);

export const getLoaded = createSelector(
  getDashboardState,
  state => state.loaded
);

export const getDashboard = createSelector(
  getDashboardState,
  state => state.dashboard
);
