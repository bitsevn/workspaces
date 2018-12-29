import { Action } from '@ngrx/store';

export enum WorkspacesActionTypes {
  WORKSPACES_LOADED = '[Workspaces] Workspaces Loaded'
}

export class WorkspacesLoadedAction implements Action {
  readonly type = WorkspacesActionTypes.WORKSPACES_LOADED;
}

export type WorkspacesActions = WorkspacesLoadedAction;
