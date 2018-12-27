import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimePeriodComponent } from "./time-period.component";

@NgModule({
  declarations: [TimePeriodComponent],
  exports: [TimePeriodComponent],
  imports: [CommonModule]
})
export class TimePeriodsModule {}
