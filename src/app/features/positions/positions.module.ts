import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PositionsComponent } from './positions.component';

@NgModule({
  declarations: [PositionsComponent],
  exports: [PositionsComponent],
  imports: [CommonModule]
})
export class PositionsModule {}
