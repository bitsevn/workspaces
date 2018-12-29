import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ClientsActions, ClientsActionTypes } from './clients.actions';
import { IClientState, IClient } from './clients.interface';

export const clientsEntityAdapter: EntityAdapter<IClient> = createEntityAdapter<IClient>();

const initialState: IClientState = clientsEntityAdapter.getInitialState({
  ids: [100, 101],
  entities: {
    100: {
      id: 100,
      name: '...FSTEST',
      funds: [
        {
          id: 1,
          name: 'FSTEST onshore fund',
          accounts: [
            { id: 450, portfolioId: 'GJHSABFM' },
            { id: 451, portfolioId: 'SDFFJNFG' },
            { id: 452, portfolioId: 'OKFDKGNL' }
          ]
        },
        {
          id: 2,
          name: 'FSTEST offshore fund',
          accounts: [{ id: 460, portfolioId: 'POLKHDFB' }, { id: 461, portfolioId: 'YUFFLLLK' }]
        }
      ]
    },
    101: {
      id: 101,
      name: 'ANALYTICS',
      funds: [
        {
          id: 10,
          name: 'ANALYTICS onshore fund',
          accounts: [
            { id: 652, portfolioId: 'TUOJFKMS' },
            { id: 653, portfolioId: 'IKJMLNKD' },
            { id: 654, portfolioId: 'WUSNFKKL' }
          ]
        },
        {
          id: 11,
          name: 'ANALYTICS offshore fund',
          accounts: [{ id: 752, portfolioId: 'GDJKKFK' }, { id: 785, portfolioId: 'UHKFBDK' }]
        }
      ]
    }
  }
});

export function reducer(state = initialState, action: ClientsActions): IClientState {
  switch (action.type) {
    case ClientsActionTypes.CLIENTS_LOADED:
      return state;

    default:
      return state;
  }
}

export const { selectAll } = clientsEntityAdapter.getSelectors();
