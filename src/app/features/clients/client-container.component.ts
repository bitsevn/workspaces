import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IClient, IClientState } from 'src/app/shared/states/clients/clients.interface';
import * as fromClients from 'src/app/shared/states/clients/clients.reducer';

@Component({
  selector: 'app-client-container',
  templateUrl: './client-container.component.html',
  styleUrls: ['./client-container.component.scss']
})
export class ClientContainerComponent implements OnInit {
  clients$: Observable<IClient[]>;

  constructor(private store: Store<IClientState>) {}

  ngOnInit() {
    this.clients$ = this.store.select(fromClients.selectAll);
    this.clients$.subscribe(clients => console.log('clients', clients));
  }
}
