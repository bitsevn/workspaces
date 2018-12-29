import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBookmarkFolders from '../../shared/states/bookmark-folders/bookmark-folders.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookmarkFoldersEffects } from '../../shared/states/bookmark-folders/bookmark-folders.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarkFolders', fromBookmarkFolders.reducer),
    EffectsModule.forFeature([BookmarkFoldersEffects])
  ]
})
export class BookmarkFoldersStoreModule {}
