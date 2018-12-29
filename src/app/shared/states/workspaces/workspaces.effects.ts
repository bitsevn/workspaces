import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { WorkspacesActionTypes } from './workspaces.actions';

@Injectable()
export class WorkspacesEffects {
  @Effect()
  loadWorkspacess$ = this.actions$.pipe(ofType(WorkspacesActionTypes.WORKSPACES_LOADED));

  constructor(private actions$: Actions) {}
}
