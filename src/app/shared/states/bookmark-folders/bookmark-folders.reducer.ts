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

const initialState: IBookmarkFoldersState = bookmarkFoldersEntityAdapter.getInitialState(
  {
    ids: [10, 11, 12],
    entities: {
      10: {
        id: 10,
        name: "My Bookmarks",
        bookmarks: [
          { id: 1, name: "Daily Returns" },
          { id: 2, name: "Weekly Returns" },
          { id: 3, name: "BiMonthly Returns" },
          { id: 4, name: "Monthly Returns" },
          { id: 5, name: "Quarterly Returns" },
          { id: 6, name: "Half Yearly Returns" },
          { id: 7, name: "early Returns" }
        ]
      },
      11: {
        id: 11,
        name: "Client Bookmarks",
        bookmarks: [
          { id: 100, name: "Sectorwise Returns" },
          { id: 101, name: "Countrywise Returns" },
          { id: 102, name: "Industrywise Returns" }
        ]
      },
      12: {
        id: 12,
        name: "Standard Bookmarks",
        bookmarks: [
          { id: 115, name: "Financials" },
          { id: 116, name: "Returns Vs. Index Returns" }
        ]
      }
    }
  }
);

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
