import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkFolderComponent } from './bookmark-folder.component';

@NgModule({
  declarations: [BookmarkFolderComponent],
  exports: [BookmarkFolderComponent],
  imports: [CommonModule]
})
export class BookmarkFoldersModule {}
