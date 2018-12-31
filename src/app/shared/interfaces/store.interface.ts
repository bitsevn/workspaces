import { RouterReducerState } from '@ngrx/router-store';
import { IBookmarkFoldersState } from '../states/bookmark-folders/bookmark-folders.interface';
import { IClientState } from '../states/clients/clients.interface';
import { IDashboardState } from '../states/dashboard/dashboard.interface';
import { IFundState } from '../states/funds/funds.interface';
import { IIndexState } from '../states/indices/indices.interface';
import { ILayoutsState } from '../states/layouts/layouts.interface';
import { ISearchCriteriaState } from '../states/search-criteria/search-criteria.interface';
import { ITimePeriodState } from '../states/time-periods/time-periods.interface';
import { IUserPreference as IUserPreferenceState } from '../states/user-prefs/user-prefs.interface';
import { IWorkspacesState } from '../states/workspaces/workspaces.interface';
import { IRouterStateUrl } from './router.interface';

export interface IStore {
  router: RouterReducerState<IRouterStateUrl>; // Do Not change this key and value pair. Needed for time travel debugging.
  userPrefs: IUserPreferenceState;
  layouts: ILayoutsState;
  workspaces: IWorkspacesState;
  bookmarkFolders: IBookmarkFoldersState;
  clients: IClientState;
  funds: IFundState;
  indices: IIndexState;
  timePeriods: ITimePeriodState;
  searchCriteria: ISearchCriteriaState;
  dashboard: IDashboardState;
}
