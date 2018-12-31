export interface IUserDefaults {
  workspaceId: number;
  clientId: number;
  indexId: number | string;
  timePeriodId: number | string;
}

export interface IUserPreference {
  id: number | string;
  name: string;
  defaults: IUserDefaults;
}

export interface ILayoutSection {
  id: number;
  order: number;
  rows: number;
  cols: number;
  x: number;
  y: number;
}

export interface ILayout {
  id: number;
  name: string;
  description?: string;
  sections: ILayoutSection[];
}

export enum WorkspaceType {
  PERSONAL = 0,
  SHARED = 1,
  GLOBAL = 2
}

export interface IWorkspaceLayoutSection {
  itemId: number | string;
  layoutSectionId: number;
}

export interface IWorkspace {
  id: number;
  name: string;
  kind: WorkspaceType;
  layoutId: number;
  layoutSectionMappings: IWorkspaceLayoutSection[];
}

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

export interface IIndex {
  id: number | string;
  name: string;
}

export interface ITimePeriod {
  id: number | string;
  name: string;
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

export interface ISearchCriteria {
  userId: string;
  clientId: number;
  bookmarkId: number;
  indexId: number | string;
  accounts: number[] | string[];
  timePeriod?: number | string;
  startDate?: number; // YYYYMMDD
  endDate?: number; // YYYYMMDD
  isSearching?: boolean;
}

export enum Mode {
  VIEW = 0,
  EDIT = 1,
  DELETE = 2
}

export interface IDashboard {
  sidebarOpen: boolean;
  mode: Mode;
}

export interface IState {
  userPrefs: IUserPreference;
  layouts: ILayout[];
  workspaces: IWorkspace[];
  bookmarkFolders: IBookmarkFolder[];
  clients: IClient[];
  funds: IFund[];
  indices: IIndex[];
  timePeriods: ITimePeriod[];
  searchCriteria: ISearchCriteria;
}
