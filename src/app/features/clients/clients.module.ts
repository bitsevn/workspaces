import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClientComponent } from './client.component';

@NgModule({
  declarations: [ClientComponent],
  exports: [ClientComponent],
  imports: [CommonModule, BsDropdownModule.forRoot()]
})
export class ClientsModule {}
