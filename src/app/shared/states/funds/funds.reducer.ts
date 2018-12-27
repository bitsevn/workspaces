import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { FundsActions, FundsActionTypes } from "./funds.actions";
import { IFundState, IFund } from "./funds.interface";

export const fundsEntityAdapter: EntityAdapter<IFund> = createEntityAdapter<
  IFund
>();

const initialState: IFundState = fundsEntityAdapter.getInitialState();

export function reducer(
  state = initialState,
  action: FundsActions
): IFundState {
  switch (action.type) {
    case FundsActionTypes.FUNDS_LOADED:
      return {
        ...state
      };

    default:
      return state;
  }
}
