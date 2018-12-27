import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { ClientsActions, ClientsActionTypes } from "./clients.actions";
import { IClientState, IClient } from "./clients.interface";

export const clientsEntityAdapter: EntityAdapter<IClient> = createEntityAdapter<
  IClient
>();

const initialState: IClientState = clientsEntityAdapter.getInitialState();

export function reducer(
  state = initialState,
  action: ClientsActions
): IClientState {
  switch (action.type) {
    case ClientsActionTypes.CLIENTS_LOADED:
      return state;

    default:
      return state;
  }
}
