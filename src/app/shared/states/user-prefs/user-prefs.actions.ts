import { Action } from "@ngrx/store";

export enum UserPrefsActionTypes {
  USER_PREFS_LOADED = "[UserPrefs] User Prefs Loaded"
}

export class UserPrefsLoadedAction implements Action {
  readonly type = UserPrefsActionTypes.USER_PREFS_LOADED;
}

export type UserPrefsActions = UserPrefsLoadedAction;
