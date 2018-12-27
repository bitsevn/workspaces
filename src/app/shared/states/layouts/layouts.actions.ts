import { Action } from "@ngrx/store";

export enum LayoutsActionTypes {
  LAYOUTS_LOADED = "[Layouts] Layouts Loaded"
}

export class LayoutsLoadedAction implements Action {
  readonly type = LayoutsActionTypes.LAYOUTS_LOADED;
}

export type LayoutsActions = LayoutsLoadedAction;
