import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserPrefComponent } from "./user-pref.component";

@NgModule({
  declarations: [UserPrefComponent],
  exports: [UserPrefComponent],
  imports: [CommonModule]
})
export class UserPrefsModule {}
