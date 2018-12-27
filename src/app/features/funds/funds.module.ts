import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FundComponent } from "./fund.component";

@NgModule({
  declarations: [FundComponent],
  exports: [FundComponent],
  imports: [CommonModule]
})
export class FundsModule {}
