import { EntityState } from '@ngrx/entity';

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
