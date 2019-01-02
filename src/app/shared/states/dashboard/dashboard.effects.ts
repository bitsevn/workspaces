import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DashboardActionTypes } from './dashboard.action';

@Injectable()
export class DashboardEffects {
  @Effect()
  loadWorkspace$ = this.actions$.pipe(ofType(DashboardActionTypes.LOAD_DASHBOARD));

  constructor(private actions$: Actions) {}
}
