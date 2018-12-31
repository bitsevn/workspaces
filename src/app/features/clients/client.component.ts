import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IClient, IClientState } from 'src/app/shared/states/clients/clients.interface';
import * as fromClients from 'src/app/shared/states/clients/clients.reducer';
import * as fromSearchCriteriaActions from 'src/app/shared/states/search-criteria/search-criteria.actions';
import * as fromSearchCriteria from 'src/app/shared/states/search-criteria/search-criteria.reducer';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients$: Observable<IClient[]>;
  client$: Observable<IClient>;
  searching$: Observable<boolean>;

  constructor(private store: Store<IClientState>) {}

  ngOnInit() {
    this.clients$ = this.store.select(fromClients.selectAllClients);
    this.searching$ = this.store.select(fromSearchCriteria.getSearching);
    this.store.select(fromSearchCriteria.getClientId).subscribe(clientId => {
      this.client$ = this.store.select(fromClients.getClientById(clientId));
    });
  }

  onSelect(clientId: number) {
    this.store.dispatch(new fromSearchCriteriaActions.ClientChangedAction(clientId));
  }
}
