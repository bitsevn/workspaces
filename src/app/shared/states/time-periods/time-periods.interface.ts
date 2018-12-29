import { EntityState } from '@ngrx/entity';

export interface ITimePeriod {
  id: number | string;
  name: string;
}

export interface ITimePeriodState extends EntityState<ITimePeriod> {}
