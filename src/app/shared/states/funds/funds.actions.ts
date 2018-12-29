import { Action } from '@ngrx/store';

export enum FundsActionTypes {
  FUNDS_LOADED = '[Funds] Funds Loaded'
}

export class FundsLoadedAction implements Action {
  readonly type = FundsActionTypes.FUNDS_LOADED;
  constructor(public funds: any[]) {}
}

export type FundsActions = FundsLoadedAction;
