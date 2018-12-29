import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromIndices from '../../shared/states/indices/indices.reducer';
import { EffectsModule } from '@ngrx/effects';
import { IndicesEffects } from '../../shared/states/indices/indices.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('indices', fromIndices.reducer),
    EffectsModule.forFeature([IndicesEffects])
  ]
})
export class IndicesStoreModule {}
