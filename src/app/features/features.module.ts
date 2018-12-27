import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientsModule } from "./clients/clients.module";
import { BookmarkFoldersModule } from "./bookmark-folders/bookmark-folders.module";
import { FundsModule } from "./funds/funds.module";
import { IndicesModule } from "./indices/indices.module";
import { LayoutsModule } from "./layouts/layouts.module";
import { SearchCriteriaModule } from "./search-criteria/search-criteria.module";
import { TimePeriodsModule } from "./time-periods/time-periods.module";
import { UserPrefsModule } from "./user-prefs/user-prefs.module";
import { WorkspacesModule } from "./workspaces/workspaces.module";

const featuresModules = [
  BookmarkFoldersModule,
  ClientsModule,
  FundsModule,
  IndicesModule,
  LayoutsModule,
  SearchCriteriaModule,
  TimePeriodsModule,
  UserPrefsModule,
  WorkspacesModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...featuresModules],
  exports: [...featuresModules]
})
export class FeaturesModule {}
