import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimePeriodComponent } from './time-period.component';

@NgModule({
  declarations: [TimePeriodComponent],
  exports: [TimePeriodComponent],
  imports: [CommonModule, BsDropdownModule.forRoot()]
})
export class TimePeriodsModule {}
