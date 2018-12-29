import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [IndexComponent],
  exports: [IndexComponent],
  imports: [CommonModule, BsDropdownModule.forRoot()]
})
export class IndicesModule {}
