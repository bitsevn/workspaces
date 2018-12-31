import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DashboardEffects } from '../../shared/states/dashboard/dashboard.effects';
import * as fromDashboard from '../../shared/states/dashboard/dashboard.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('dashboard', fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardStoreModule {}
