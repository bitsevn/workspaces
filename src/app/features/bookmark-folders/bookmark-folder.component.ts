import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBookmarkFolder } from 'src/app/db';
import { IBookmarkFoldersState } from 'src/app/shared/states/bookmark-folders/bookmark-folders.interface';
import { selectAllBookmarkFolders } from '../../shared/states/bookmark-folders/bookmark-folders.selector';

@Component({
  selector: 'app-bookmark-folder',
  templateUrl: './bookmark-folder.component.html',
  styleUrls: ['./bookmark-folder.component.scss']
})
export class BookmarkFolderComponent implements OnInit {
  bookmarkFolders$: Observable<IBookmarkFolder[]>;

  constructor(private store: Store<IBookmarkFoldersState>) {}

  ngOnInit() {
    this.bookmarkFolders$ = this.store.select(selectAllBookmarkFolders);
  }
}
