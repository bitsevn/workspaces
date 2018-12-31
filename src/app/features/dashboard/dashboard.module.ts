import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BookmarkFoldersModule } from '../bookmark-folders/bookmark-folders.module';
import { NavigationModule } from '../navigation/navigation.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [DashboardComponent, SidebarComponent],
  imports: [
    CommonModule,
    GridsterModule,
    BsDropdownModule.forRoot(),
    NavigationModule,
    BookmarkFoldersModule
  ]
})
export class DashboardModule {}
