import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';

@NgModule({
  declarations: [WorkspaceComponent],
  exports: [WorkspaceComponent],
  imports: [CommonModule]
})
export class WorkspacesModule {}
