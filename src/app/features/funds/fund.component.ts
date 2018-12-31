import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFund } from 'src/app/db';
import { IStore } from 'src/app/shared/interfaces/store.interface';
import * as fromClients from 'src/app/shared/states/clients/clients.reducer';
import * as fromFunds from 'src/app/shared/states/funds/funds.reducer';
import * as fromSearchCriteria from 'src/app/shared/states/search-criteria/search-criteria.reducer';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {
  funds$: Observable<IFund[]>;
  searching$: Observable<boolean>;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.funds$ = this.store.select(fromFunds.getAllFunds);
    this.searching$ = this.store.select(fromSearchCriteria.getSearching);
    this.store.select(fromSearchCriteria.getClientId).subscribe(clientId => {
      this.funds$ = this.store.select(fromClients.getClientFunds(clientId));
    });
  }
}
