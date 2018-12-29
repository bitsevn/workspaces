import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ClientsActionTypes } from './clients.actions';

@Injectable()
export class ClientsEffects {
  @Effect()
  loadClientss$ = this.actions$.pipe(ofType(ClientsActionTypes.CLIENTS_LOADED));

  constructor(private actions$: Actions) {}
}
