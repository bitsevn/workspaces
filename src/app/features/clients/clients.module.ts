import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClientComponent } from './client.component';
import { ClientContainerComponent } from './client-container.component';

@NgModule({
  declarations: [ClientComponent, ClientContainerComponent],
  exports: [ClientContainerComponent],
  imports: [CommonModule, BsDropdownModule.forRoot()]
})
export class ClientsModule {}
