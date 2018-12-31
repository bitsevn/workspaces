import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutsActions, LayoutsActionTypes } from '../../../shared/states/layouts/layouts.actions';
import { ILayout, ILayoutsState } from './layouts.interface';

export const layoutsEntityAdapter: EntityAdapter<ILayout> = createEntityAdapter<ILayout>();

const initialState: ILayoutsState = layoutsEntityAdapter.getInitialState({
  ids: [0, 1, 2, 3],
  entities: {
    0: {
      id: 0,
      name: 'one-col',
      sections: [
        {
          id: 1,
          order: 1,
          rows: 1,
          cols: 1,
          x: 0,
          y: 0
        }
      ]
    },
    1: {
      id: 1,
      name: 'two-cols',
      sections: [
        {
          id: 1,
          order: 1,
          rows: 1,
          cols: 1,
          x: 0,
          y: 0
        },
        {
          id: 2,
          order: 2,
          rows: 1,
          cols: 1,
          x: 1,
          y: 0
        }
      ]
    },
    2: {
      id: 2,
      name: 'three-cols',
      sections: [
        {
          id: 1,
          order: 1,
          rows: 1,
          cols: 1,
          x: 0,
          y: 0
        },
        {
          id: 2,
          order: 2,
          rows: 1,
          cols: 1,
          x: 1,
          y: 0
        },
        {
          id: 3,
          order: 3,
          rows: 1,
          cols: 1,
          x: 2,
          y: 0
        }
      ]
    },
    3: {
      id: 3,
      name: 'four-cols',
      sections: [
        {
          id: 1,
          order: 1,
          rows: 1,
          cols: 1,
          x: 0,
          y: 0
        },
        {
          id: 2,
          order: 2,
          rows: 1,
          cols: 1,
          x: 1,
          y: 0
        },
        {
          id: 3,
          order: 3,
          rows: 1,
          cols: 1,
          x: 0,
          y: 1
        },
        {
          id: 4,
          order: 4,
          rows: 1,
          cols: 1,
          x: 1,
          y: 2
        }
      ]
    }
  }
});

export function reducer(state = initialState, action: LayoutsActions): ILayoutsState {
  switch (action.type) {
    case LayoutsActionTypes.LAYOUTS_LOADED:
      return state;

    default:
      return state;
  }
}

const { selectEntities } = layoutsEntityAdapter.getSelectors();

export const getLayoutsState = createFeatureSelector('layouts');

export const getAllEntities = createSelector(
  getLayoutsState,
  selectEntities
);

export const getLayoutById = (id: number) =>
  createSelector(
    getAllEntities,
    entities => entities[id]
  );

export const getDefaultLayout = createSelector(
  getAllEntities,
  entities => entities[0]
);
