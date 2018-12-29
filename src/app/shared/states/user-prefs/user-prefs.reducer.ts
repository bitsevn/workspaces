import { Action } from '@ngrx/store';
import {
  UserPrefsActions,
  UserPrefsActionTypes
} from '../../../shared/states/user-prefs/user-prefs.actions';
import { IUserPreference } from './user-prefs.interface';

export const initialState: IUserPreference = {
  id: 'arunku@ms.com',
  name: 'Arun Kumar'
};

export function reducer(state = initialState, action: UserPrefsActions): IUserPreference {
  switch (action.type) {
    case UserPrefsActionTypes.USER_PREFS_LOADED:
      return state;

    default:
      return state;
  }
}
