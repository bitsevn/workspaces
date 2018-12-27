import { createFeatureSelector, createSelector } from "@ngrx/store";
import { bookmarkFoldersEntityAdapter } from "./bookmark-folders.reducer";
import { IBookmarkFoldersState } from "./bookmark-folders.interface";

const {
  selectIds,
  selectAll,
  selectEntities,
  selectTotal
} = bookmarkFoldersEntityAdapter.getSelectors();

export const getBookmarkFoldersStateSelector = createFeatureSelector<
  IBookmarkFoldersState
>("bookmarkFolders");

export const selectAllBookmarkFolders = createSelector(
  getBookmarkFoldersStateSelector,
  selectAll
);
