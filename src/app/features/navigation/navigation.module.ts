import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchCriteriaModule } from '../search-criteria/search-criteria.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule, SearchCriteriaModule]
})
export class NavigationModule {}
