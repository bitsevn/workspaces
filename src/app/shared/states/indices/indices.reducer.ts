import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { IndicesActions, IndicesActionTypes } from "./indices.actions";
import { IIndexState, IIndex } from "./indices.interface";

export const indicesEntityAdapter: EntityAdapter<IIndex> = createEntityAdapter<
  IIndex
>();

const initialState: IIndexState = indicesEntityAdapter.getInitialState();

export function reducer(
  state = initialState,
  action: IndicesActions
): IIndexState {
  switch (action.type) {
    case IndicesActionTypes.INDICES_LOADED:
      return state;

    default:
      return state;
  }
}
