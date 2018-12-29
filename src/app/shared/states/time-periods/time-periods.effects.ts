import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TimePeriodsActionTypes } from './time-periods.actions';

@Injectable()
export class TimePeriodsEffects {
  @Effect()
  loadTimePeriodss$ = this.actions$.pipe(ofType(TimePeriodsActionTypes.TIME_PERIODS_LOADED));

  constructor(private actions$: Actions) {}
}
