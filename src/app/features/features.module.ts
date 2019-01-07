import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookmarkFoldersModule } from './bookmark-folders/bookmark-folders.module';
import { ClientsModule } from './clients/clients.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FundsModule } from './funds/funds.module';
import { IndicesModule } from './indices/indices.module';
import { LayoutsModule } from './layouts/layouts.module';
import { NavigationModule } from './navigation/navigation.module';
import { SearchCriteriaModule } from './search-criteria/search-criteria.module';
import { TimePeriodsModule } from './time-periods/time-periods.module';
import { UserPrefsModule } from './user-prefs/user-prefs.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { BuilderModule } from './builder/builder.module';
import { PositionsModule } from './positions/positions.module';

const featuresModules = [
  BookmarkFoldersModule,
  ClientsModule,
  FundsModule,
  IndicesModule,
  LayoutsModule,
  SearchCriteriaModule,
  TimePeriodsModule,
  UserPrefsModule,
  WorkspacesModule,
  NavigationModule,
  DashboardModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...featuresModules, BuilderModule, PositionsModule],
  exports: [...featuresModules]
})
export class FeaturesModule {}
