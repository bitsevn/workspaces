import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { WorkspacesActions, WorkspacesActionTypes } from './workspaces.actions';
import { IWorkspacesState, IWorkspace } from './workspaces.interface';

export const workspacesEntityAdapter: EntityAdapter<IWorkspace> = createEntityAdapter<IWorkspace>();

const initialState: IWorkspacesState = workspacesEntityAdapter.getInitialState();

export function reducer(state = initialState, action: WorkspacesActions): IWorkspacesState {
  switch (action.type) {
    case WorkspacesActionTypes.WORKSPACES_LOADED:
      return state;

    default:
      return state;
  }
}
