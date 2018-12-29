import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserPrefsActionTypes } from '../../../shared/states/user-prefs/user-prefs.actions';

@Injectable()
export class UserPrefsEffects {
  @Effect()
  loadUserPrefss$ = this.actions$.pipe(ofType(UserPrefsActionTypes.USER_PREFS_LOADED));

  constructor(private actions$: Actions) {}
}
