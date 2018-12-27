import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IStore } from "../../shared/interfaces/store.interface";
import { selectAllBookmarkFolders } from "../../shared/states/bookmark-folders/bookmark-folders.selector";
import { Observable } from "rxjs";
import { IBookmarkFolder } from "src/app/db";

@Component({
  selector: "app-bookmark-folder",
  templateUrl: "./bookmark-folder.component.html",
  styleUrls: ["./bookmark-folder.component.scss"]
})
export class BookmarkFolderComponent implements OnInit {
  bookmarkFolders$: Observable<IBookmarkFolder[]>;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.bookmarkFolders$ = this.store.select(selectAllBookmarkFolders);
    this.bookmarkFolders$.subscribe(folders => console.log("folders", folders));
  }
}
