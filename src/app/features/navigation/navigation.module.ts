import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ClientsModule } from '../clients/clients.module';
import { FundsModule } from '../funds/funds.module';
import { IndicesModule } from '../indices/indices.module';
import { TimePeriodsModule } from '../time-periods/time-periods.module';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule, ClientsModule, FundsModule, IndicesModule, TimePeriodsModule]
})
export class NavigationModule {}
