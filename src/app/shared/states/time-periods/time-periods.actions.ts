import { Action } from '@ngrx/store';

export enum TimePeriodsActionTypes {
  TIME_PERIODS_LOADED = '[TimePeriods] TimePeriods Loaded'
}

export class TimePeriodsLoadedAction implements Action {
  readonly type = TimePeriodsActionTypes.TIME_PERIODS_LOADED;
}

export type TimePeriodsActions = TimePeriodsLoadedAction;
