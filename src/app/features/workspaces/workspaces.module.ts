import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { WorkspaceComponent } from './workspace.component';

@NgModule({
  declarations: [WorkspaceComponent],
  exports: [WorkspaceComponent],
  imports: [CommonModule, BsDropdownModule.forRoot()]
})
export class WorkspacesModule {}
