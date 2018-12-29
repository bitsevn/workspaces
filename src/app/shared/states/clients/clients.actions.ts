import { Action } from '@ngrx/store';

export enum ClientsActionTypes {
  CLIENTS_LOADED = '[Clients] Clients Loaded'
}

export class ClientsLoadedAction implements Action {
  readonly type = ClientsActionTypes.CLIENTS_LOADED;
}

export type ClientsActions = ClientsLoadedAction;
