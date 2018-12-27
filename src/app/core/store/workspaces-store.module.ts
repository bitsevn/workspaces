import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromWorkspaces from "../../shared/states/workspaces/workspaces.reducer";
import { EffectsModule } from "@ngrx/effects";
import { WorkspacesEffects } from "../../shared/states/workspaces/workspaces.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("workspaces", fromWorkspaces.reducer),
    EffectsModule.forFeature([WorkspacesEffects])
  ]
})
export class WorkspacesStoreModule {}
