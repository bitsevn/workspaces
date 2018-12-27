import { EntityState } from "@ngrx/entity";

export enum WorkspaceType {
  PERSONAL = 0,
  SHARED = 1,
  GLOBAL = 2
}

export interface IWorkspaceLayoutSection {
  itemId: number | string;
  layoutSectionId: number;
}

export interface IWorkspace {
  id: number;
  name: string;
  kind: WorkspaceType;
  layoutId: number;
  layoutSectionMappings: IWorkspaceLayoutSection[];
}

export interface IWorkspacesState extends EntityState<IWorkspace> {}
