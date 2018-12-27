import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromUserPrefs from "../../shared/states/user-prefs/user-prefs.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserPrefsEffects } from "../../shared/states/user-prefs/user-prefs.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("userPrefs", fromUserPrefs.reducer),
    EffectsModule.forFeature([UserPrefsEffects])
  ]
})
export class UserPrefsStoreModule {}
