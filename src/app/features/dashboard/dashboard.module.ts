import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DashboardComponent } from './dashboard.component';
import { NavigationModule } from '../navigation/navigation.module';
import { BookmarkFoldersModule } from '../bookmark-folders/bookmark-folders.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, BsDropdownModule.forRoot(), NavigationModule, BookmarkFoldersModule]
})
export class DashboardModule {}
