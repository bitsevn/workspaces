import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromLayouts from '../../shared/states/layouts/layouts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LayoutsEffects } from '../../shared/states/layouts/layouts.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('layouts', fromLayouts.reducer),
    EffectsModule.forFeature([LayoutsEffects])
  ]
})
export class LayoutsStoreModule {}
