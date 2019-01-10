import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TreeContainerComponent } from './tree-container.component';
import { TreeComponent } from './tree.component';

@NgModule({
  declarations: [TreeContainerComponent, TreeComponent],
  exports: [TreeContainerComponent],
  imports: [CommonModule]
})
export class TreeModule {}
