import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { NavigationModule } from "../navigation/navigation.module";
import { BookmarkFoldersModule } from "../bookmark-folders/bookmark-folders.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, NavigationModule, BookmarkFoldersModule]
})
export class DashboardModule {}
