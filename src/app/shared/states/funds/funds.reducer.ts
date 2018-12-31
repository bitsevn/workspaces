import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FundsActions, FundsActionTypes } from './funds.actions';
import { IFund, IFundState } from './funds.interface';

export const fundsEntityAdapter: EntityAdapter<IFund> = createEntityAdapter<IFund>();

const initialState: IFundState = fundsEntityAdapter.getInitialState();

export function reducer(state = initialState, action: FundsActions): IFundState {
  switch (action.type) {
    case FundsActionTypes.FUNDS_LOADED:
      return {
        ...state
      };

    default:
      return state;
  }
}

const { selectAll } = fundsEntityAdapter.getSelectors();

export const getFundsState = createFeatureSelector<IFundState>('funds');

export const getAllFunds = createSelector(
  getFundsState,
  selectAll
);
