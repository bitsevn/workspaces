import { EntityState } from '@ngrx/entity';

export interface IIndex {
  id: number | string;
  name: string;
}

export interface IIndexState extends EntityState<IIndex> {}
