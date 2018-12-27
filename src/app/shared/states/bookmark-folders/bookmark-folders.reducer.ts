import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import {
  BookmarkFoldersActions,
  BookmarkFoldersActionTypes
} from "./bookmark-folders.actions";
import {
  IBookmarkFoldersState,
  IBookmarkFolder
} from "./bookmark-folders.interface";

export const bookmarkFoldersEntityAdapter: EntityAdapter<
  IBookmarkFolder
> = createEntityAdapter<IBookmarkFolder>();

const initialState: IBookmarkFoldersState = bookmarkFoldersEntityAdapter.getInitialState();

export function reducer(
  state = initialState,
  action: BookmarkFoldersActions
): IBookmarkFoldersState {
  switch (action.type) {
    case BookmarkFoldersActionTypes.BOOKMARK_FOLDERS_LOADED:
      return state;

    default:
      return state;
  }
}
