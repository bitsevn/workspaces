import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import { Workspace2Component } from './workspace2.component';

@NgModule({
  declarations: [Workspace2Component],
  exports: [Workspace2Component],
  imports: [CommonModule, GridsterModule, BookmarksModule]
})
export class Workspace2Module {}
