import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { BuilderComponent } from './builder.component';

@NgModule({
  declarations: [BuilderComponent],
  imports: [CommonModule, GridsterModule]
})
export class BuilderModule {}
