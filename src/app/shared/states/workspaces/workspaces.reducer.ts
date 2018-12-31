import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkspacesActions, WorkspacesActionTypes } from './workspaces.actions';
import { IWorkspace, IWorkspacesState, WorkspaceType } from './workspaces.interface';

export const workspacesEntityAdapter: EntityAdapter<IWorkspace> = createEntityAdapter<IWorkspace>();

const initialState: IWorkspacesState = workspacesEntityAdapter.getInitialState({
  ids: [100, 101],
  entities: {
    100: {
      id: 100,
      name: 'Default workspace',
      default: true,
      kind: WorkspaceType.GLOBAL,
      layoutId: 1,
      layoutSectionMappings: [
        {
          id: 1452,
          bookmarkId: 12345,
          chartId: null,
          layoutSectionId: 1
        },
        {
          id: 1453,
          bookmarkId: 14531,
          chartId: 147,
          layoutSectionId: 2
        }
      ]
    },
    101: {
      id: 101,
      name: 'Personal workspace',
      default: false,
      kind: WorkspaceType.PERSONAL,
      layoutId: 2,
      layoutSectionMappings: [
        {
          id: 4523,
          bookmarkId: 47622,
          chartId: null,
          layoutSectionId: 1
        },
        {
          id: 4524,
          bookmarkId: 62323,
          chartId: null,
          layoutSectionId: 2
        },
        {
          id: 4525,
          bookmarkId: 45212,
          chartId: 142,
          layoutSectionId: 3
        }
      ]
    }
  }
});

export function reducer(state = initialState, action: WorkspacesActions): IWorkspacesState {
  switch (action.type) {
    case WorkspacesActionTypes.WORKSPACES_LOADED:
      return state;

    default:
      return state;
  }
}

const { selectAll, selectEntities } = workspacesEntityAdapter.getSelectors();

export const getWorkspaceState = createFeatureSelector<IWorkspacesState>('workspaces');

export const getAllWorkspaces = createSelector(
  getWorkspaceState,
  selectAll
);

export const getWorkspaceEntities = createSelector(
  getWorkspaceState,
  selectEntities
);

export const getWorkspaceById = (id: number) =>
  createSelector(
    getWorkspaceEntities,
    entities => entities[id]
  );
