import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { IStore } from "./interfaces/store.interface";

import * as fromUserPrefs from "../shared/states/user-prefs/user-prefs.reducer";
import * as fromLayouts from "../shared/states/layouts/layouts.reducer";
import * as fromWorkspaces from "../shared/states/workspaces/workspaces.reducer";
import * as fromBookmarkFolders from "../shared/states/bookmark-folders/bookmark-folders.reducer";
import * as fromClients from "../shared/states/clients/clients.reducer";
import * as fromFunds from "../shared/states/funds/funds.reducer";
import * as fromIndices from "../shared/states/indices/indices.reducer";
import * as fromTimePeriods from "../shared/states/time-periods/time-periods.reducer";
import * as fromSearchCriteria from "../shared/states/search-criteria/search-criteria.reducer";

export const reducers: ActionReducerMap<IStore> = {
  userPrefs: fromUserPrefs.reducer,
  layouts: fromLayouts.reducer,
  workspaces: fromWorkspaces.reducer,
  bookmarkFolders: fromBookmarkFolders.reducer,
  clients: fromClients.reducer,
  funds: fromFunds.reducer,
  indices: fromIndices.reducer,
  timePeriods: fromTimePeriods.reducer,
  searchCriteria: fromSearchCriteria.reducer
};

export const metaReducers: MetaReducer<IStore>[] = !environment.production
  ? []
  : [];
