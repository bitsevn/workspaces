import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import {
  TimePeriodsActions,
  TimePeriodsActionTypes
} from "./time-periods.actions";
import { ITimePeriodState, ITimePeriod } from "./time-periods.interface";

export const timePeriodsEntityAdapter: EntityAdapter<
  ITimePeriod
> = createEntityAdapter<ITimePeriod>();

const initialState: ITimePeriodState = timePeriodsEntityAdapter.getInitialState();

export function reducer(
  state = initialState,
  action: TimePeriodsActions
): ITimePeriodState {
  switch (action.type) {
    case TimePeriodsActionTypes.TIME_PERIODS_LOADED:
      return state;

    default:
      return state;
  }
}
