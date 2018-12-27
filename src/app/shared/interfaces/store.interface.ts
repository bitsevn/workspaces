import { IUserPreference as IUserPreferenceState } from "../states/user-prefs/user-prefs.interface";
import { ILayoutsState } from "../states/layouts/layouts.interface";
import { IWorkspacesState } from "../states/workspaces/workspaces.interface";
import { IBookmarkFoldersState } from "../states/bookmark-folders/bookmark-folders.interface";
import { IClientState } from "../states/clients/clients.interface";
import { IFundState } from "../states/funds/funds.interface";
import { IIndexState } from "../states/indices/indices.interface";
import { ITimePeriodState } from "../states/time-periods/time-periods.interface";
import { ISearchCriteriaState } from "../states/search-criteria/search-criteria.interface";

export interface IStore {
  userPrefs: IUserPreferenceState;
  layouts: ILayoutsState;
  workspaces: IWorkspacesState;
  bookmarkFolders: IBookmarkFoldersState;
  clients: IClientState;
  funds: IFundState;
  indices: IIndexState;
  timePeriods: ITimePeriodState;
  searchCriteria: ISearchCriteriaState;
}
