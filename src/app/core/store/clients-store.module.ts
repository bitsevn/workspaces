import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromClients from "../../shared/states/clients/clients.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ClientsEffects } from "../../shared/states/clients/clients.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("clients", fromClients.reducer),
    EffectsModule.forFeature([ClientsEffects])
  ]
})
export class ClientsStoreModule {}
