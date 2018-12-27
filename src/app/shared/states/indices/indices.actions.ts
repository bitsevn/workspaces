import { Action } from "@ngrx/store";

export enum IndicesActionTypes {
  INDICES_LOADED = "[Indices] Indices Loaded"
}

export class IndicesLoadedAction implements Action {
  readonly type = IndicesActionTypes.INDICES_LOADED;
}

export type IndicesActions = IndicesLoadedAction;
