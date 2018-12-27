import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { BookmarkFoldersActionTypes } from "./bookmark-folders.actions";

@Injectable()
export class BookmarkFoldersEffects {
  @Effect()
  loadBookmarkFolderss$ = this.actions$.pipe(
    ofType(BookmarkFoldersActionTypes.BOOKMARK_FOLDERS_LOADED)
  );

  constructor(private actions$: Actions) {}
}
