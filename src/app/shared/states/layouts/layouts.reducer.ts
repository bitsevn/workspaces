import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { LayoutsActions, LayoutsActionTypes } from '../../../shared/states/layouts/layouts.actions';
import { ILayoutsState, ILayout } from './layouts.interface';

export const layoutsEntityAdapter: EntityAdapter<ILayout> = createEntityAdapter<ILayout>();

const initialState: ILayoutsState = layoutsEntityAdapter.getInitialState({
  ids: [10, 11, 12],
  entities: {
    10: {
      id: 10,
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
    11: {
      id: 11,
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
    12: {
      id: 12,
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
