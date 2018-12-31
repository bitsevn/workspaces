import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import * as fromBookmarkFolders from '../shared/states/bookmark-folders/bookmark-folders.reducer';
import * as fromClients from '../shared/states/clients/clients.reducer';
import * as fromDashboard from '../shared/states/dashboard/dashboard.reducer';
import * as fromFunds from '../shared/states/funds/funds.reducer';
import * as fromIndices from '../shared/states/indices/indices.reducer';
import * as fromLayouts from '../shared/states/layouts/layouts.reducer';
import * as fromSearchCriteria from '../shared/states/search-criteria/search-criteria.reducer';
import * as fromTimePeriods from '../shared/states/time-periods/time-periods.reducer';
import * as fromUserPrefs from '../shared/states/user-prefs/user-prefs.reducer';
import * as fromWorkspaces from '../shared/states/workspaces/workspaces.reducer';
import { IRouterStateUrl } from './interfaces/router.interface';
import { IStore } from './interfaces/store.interface';

export const reducers: ActionReducerMap<IStore> = {
  router: routerReducer, // Do Not change this key and value pair. Needed for time travel debugging.
  userPrefs: fromUserPrefs.reducer,
  layouts: fromLayouts.reducer,
  workspaces: fromWorkspaces.reducer,
  bookmarkFolders: fromBookmarkFolders.reducer,
  clients: fromClients.reducer,
  funds: fromFunds.reducer,
  indices: fromIndices.reducer,
  timePeriods: fromTimePeriods.reducer,
  searchCriteria: fromSearchCriteria.reducer,
  dashboard: fromDashboard.reducer
};

export const metaReducers: MetaReducer<IStore>[] = !environment.production ? [storeFreeze] : [];

@Injectable()
export class CustomRouterStateSerializer extends RouterStateSerializer<IRouterStateUrl> {
  serialize(state: RouterStateSnapshot): IRouterStateUrl {
    let route = state.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = state;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

// fetches you the router state object
export const routerState = createFeatureSelector<RouterReducerState<IRouterStateUrl>>('router');

// gets you info about current route
export const getRouterInfo = createSelector(
  routerState,
  state => state.state
);
