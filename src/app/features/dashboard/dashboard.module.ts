import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BookmarkFoldersModule } from '../bookmark-folders/bookmark-folders.module';
import { NavigationModule } from '../navigation/navigation.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Workspace2Module } from './workspace2/workspace2.module';

@NgModule({
  declarations: [DashboardComponent, SidebarComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    NavigationModule,
    BookmarkFoldersModule,
    BookmarksModule,
    Workspace2Module
  ]
})
export class DashboardModule {}
