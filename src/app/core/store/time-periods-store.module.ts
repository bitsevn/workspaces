import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTimePeriods from '../../shared/states/time-periods/time-periods.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TimePeriodsEffects } from '../../shared/states/time-periods/time-periods.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('timePeriods', fromTimePeriods.reducer),
    EffectsModule.forFeature([TimePeriodsEffects])
  ]
})
export class TimePeriodsStoreModule {}
