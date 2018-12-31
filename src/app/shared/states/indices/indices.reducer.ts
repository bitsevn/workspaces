import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IndicesActions, IndicesActionTypes } from './indices.actions';
import { IIndex, IIndexState } from './indices.interface';

export const indicesEntityAdapter: EntityAdapter<IIndex> = createEntityAdapter<IIndex>();

const initialState: IIndexState = indicesEntityAdapter.getInitialState({
  ids: [1, 2, 3],
  entities: {
    1: {
      id: 1,
      name: 'S&P 500'
    },
    2: {
      id: 2,
      name: 'S&P 100'
    },
    3: {
      id: 3,
      name: 'Nifty 50'
    }
  }
});

export function reducer(state = initialState, action: IndicesActions): IIndexState {
  switch (action.type) {
    case IndicesActionTypes.INDICES_LOADED:
      return state;

    default:
      return state;
  }
}

const { selectAll, selectEntities } = indicesEntityAdapter.getSelectors();

export const getIndicesState = createFeatureSelector<IIndexState>('indices');

export const getAllIndices = createSelector(
  getIndicesState,
  selectAll
);

export const selectAllEntities = createSelector(
  getIndicesState,
  selectEntities
);

export const getIndexById = (id: number | string) =>
  createSelector(
    selectAllEntities,
    entities => entities[id]
  );
