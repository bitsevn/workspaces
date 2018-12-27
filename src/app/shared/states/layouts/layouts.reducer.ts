import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import {
  LayoutsActions,
  LayoutsActionTypes
} from "../../../shared/states/layouts/layouts.actions";
import { ILayoutsState, ILayout } from "./layouts.interface";

export const layoutsEntityAdapter: EntityAdapter<ILayout> = createEntityAdapter<
  ILayout
>();

const initialState: ILayoutsState = layoutsEntityAdapter.getInitialState();

export function reducer(
  state = initialState,
  action: LayoutsActions
): ILayoutsState {
  switch (action.type) {
    case LayoutsActionTypes.LAYOUTS_LOADED:
      return state;

    default:
      return state;
  }
}
