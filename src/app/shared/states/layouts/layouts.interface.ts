import { EntityState } from '@ngrx/entity';
import { GridsterItem } from 'angular-gridster2';

export interface ILayoutSection extends GridsterItem {
  id: number;
  order: number;
  bookmarkId?: number;
  chartId?: number;
}

export interface ILayout {
  id: number;
  name: string;
  description?: string;
  sections?: ILayoutSection[];
}

export interface ILayoutsState extends EntityState<ILayout> {}
