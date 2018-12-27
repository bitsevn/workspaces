import { EntityState } from "@ngrx/entity";

export interface ILayoutSection {
  id: number;
  order: number;
  rows: number;
  cols: number;
  x: number;
  y: number;
}

export interface ILayout {
  id: number;
  name: string;
  description?: string;
  sections?: ILayoutSection[];
}

export interface ILayoutsState extends EntityState<ILayout> {}
