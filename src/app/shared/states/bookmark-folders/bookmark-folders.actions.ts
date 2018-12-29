import { Action } from '@ngrx/store';

export enum BookmarkFoldersActionTypes {
  BOOKMARK_FOLDERS_LOADED = '[BookmarkFolders] BookmarkFolders Loaded'
}

export class BookmarkFoldersLoadedAction implements Action {
  readonly type = BookmarkFoldersActionTypes.BOOKMARK_FOLDERS_LOADED;
}

export type BookmarkFoldersActions = BookmarkFoldersLoadedAction;
