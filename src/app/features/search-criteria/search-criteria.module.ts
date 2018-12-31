import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsModule } from '../clients/clients.module';
import { FundsModule } from '../funds/funds.module';
import { IndicesModule } from '../indices/indices.module';
import { TimePeriodsModule } from '../time-periods/time-periods.module';
import { WorkspacesModule } from '../workspaces/workspaces.module';
import { SearchCriteriaComponent } from './search-criteria.component';

@NgModule({
  declarations: [SearchCriteriaComponent],
  exports: [SearchCriteriaComponent],
  imports: [
    CommonModule,
    WorkspacesModule,
    ClientsModule,
    FundsModule,
    IndicesModule,
    TimePeriodsModule
  ]
})
export class SearchCriteriaModule {}
