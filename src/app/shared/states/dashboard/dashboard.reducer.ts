import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardActions, DashboardActionTypes } from './dashboard.action';
import { IDashboardState } from './dashboard.interface';

const initialState: IDashboardState = {
  loading: true,
  loaded: false
};

export function reducer(state = initialState, action: DashboardActions): IDashboardState {
  switch (action.type) {
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
