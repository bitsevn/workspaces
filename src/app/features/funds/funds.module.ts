import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FundComponent } from './fund.component';

@NgModule({
  declarations: [FundComponent],
  exports: [FundComponent],
  imports: [CommonModule, BsDropdownModule.forRoot()]
})
export class FundsModule {}
