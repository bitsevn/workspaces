import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromFunds from '../../shared/states/funds/funds.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FundsEffects } from '../../shared/states/funds/funds.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('funds', fromFunds.reducer),
    EffectsModule.forFeature([FundsEffects])
  ]
})
export class FundsStoreModule {}
