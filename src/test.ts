import { Params } from '@angular/router';
import { EntityState } from '@ngrx/entity';
import { RouterReducerState } from '@ngrx/router-store';
import { GridsterItem } from 'angular-gridster2';
import { IWorkspacesState } from './app/shared/states/workspaces/workspaces.interface';

export interface DateRange {
  startDate?: number; // YYYYMMDD
  endDate?: number; // YYYYMMDD
  timePeriod?: string;
}

export interface IUserSettingState {
  workspaceId: number;
  clientId: number;
  indexId: number | string;
  dateRanges: DateRange;
}

export enum WorkspaceType {
  PERSONAL = 0,
  SHARED = 1,
  GLOBAL = 2
}

export interface IWorkspaceSection {
  itemId: number | string;
  layoutSectionId: number;
}

export interface IWorkspace {
  id: number;
  name: string;
  type: WorkspaceType;
  layoutId: number;
  sectionMappings: IWorkspaceSection[];
}

export interface IWorkspacesState extends EntityState<IWorkspace> {}

export interface ILayoutSection extends GridsterItem {
  id: number;
  order: number;
  bookmarkId?: number;
  chartId?: number;
}

export interface ILayout {
  id: number;
  name: string;
  description?: string;
  sections: ILayoutSection[];
}

export interface ILayoutState extends EntityState<ILayout> {}

export interface IAccount {
  id: number;
  portfolioId: string;
}

export interface IFund {
  id: number;
  name: string;
  accounts: IAccount[];
}

export interface IClient {
  id: number;
  name: string;
  funds: IFund[];
}

export interface IClientState extends EntityState<IClient> {}

export interface IIndex {
  id: number | string;
  name: string;
}

export interface IIndicesState extends EntityState<IIndex> {}

export interface ITimePeriod {
  id: number | string;
  name: string;
}

export interface ITimePeriodState extends EntityState<ITimePeriod> {}

export enum ActionType {
  VIEW = 1,
  EDIT = 2
}

export interface ISearchCriteria {
  userId?: string;
  workspaceId: number;
  clientId?: number;
  bookmarkId?: number;
  chartId?: number;
  indexId?: number | string;
  accounts?: number[] | string[];
  dateRange?: DateRange;
  error?: any;
  actionType?: ActionType;
}

export interface ISearchCriteriaState extends ISearchCriteria {
  searching?: boolean;
}

export interface IRouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface IChart {
  id: number;
  name: string;
}

export interface IBookmark {
  id: number;
  chartId?: number;
  name: string;
  isChart?: boolean;
}

export interface IBookmarkFolder {
  id: number | string;
  name: string;
  bookmarks?: IBookmark[];
  folders?: IBookmarkFolder[];
}

export interface IBookmarkFoldersState extends EntityState<IBookmarkFolder> {}

export interface IContextState {
  loading: boolean;
  loaded: boolean;
  sideBarOpened: boolean;
}

export class IColumn {
  id: number | string;
  name: string;
}

export interface IColumnState extends EntityState<IColumn> {}

export class IHierarchy {
  id: number | string;
  name: string;
}

export interface IHierarchyState extends EntityState<IHierarchy> {}
export class IReferenceDataState {
  router: RouterReducerState<IRouterStateUrl>; // Do Not change this key and value pair. Needed for time travel debugging.
  userSettings: IUserSettingState;
  workspaces: IWorkspacesState;
  layouts: ILayoutState;
  clients: IClientState;
  indices: IIndicesState;
  timePeriods: ITimePeriodState;
  bookmarkFolders: IBookmarkFoldersState;
  columns: IColumnState;
  hierarchies: IHierarchyState;
  searchCriteria: ISearchCriteriaState;
  context: IContextState;
}

export interface IStore {
  referenceData: IReferenceDataState;
}
