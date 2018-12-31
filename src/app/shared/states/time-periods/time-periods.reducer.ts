import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TimePeriodsActions, TimePeriodsActionTypes } from './time-periods.actions';
import { ITimePeriod, ITimePeriodState } from './time-periods.interface';

export const timePeriodsEntityAdapter: EntityAdapter<ITimePeriod> = createEntityAdapter<
  ITimePeriod
>();

const initialState: ITimePeriodState = timePeriodsEntityAdapter.getInitialState({
  ids: ['YTD', 'QTD', 'MTD', 'DTD'],
  entities: {
    YTD: {
      id: 'YTD',
      name: 'Year to date'
    },
    QTD: {
      id: 'QTD',
      name: 'Quarter to date'
    },
    MTD: {
      id: 'MTD',
      name: 'Month to date'
    },
    DTD: {
      id: 'DTD',
      name: 'Date to date'
    }
  }
});

export function reducer(state = initialState, action: TimePeriodsActions): ITimePeriodState {
  switch (action.type) {
    case TimePeriodsActionTypes.TIME_PERIODS_LOADED:
      return state;

    default:
      return state;
  }
}

const { selectAll, selectEntities } = timePeriodsEntityAdapter.getSelectors();

export const getPeriodsState = createFeatureSelector<ITimePeriodState>('timePeriods');

export const getAllPeriods = createSelector(
  getPeriodsState,
  selectAll
);

export const selectAllEntities = createSelector(
  getPeriodsState,
  selectEntities
);

export const getPeriodById = (id: number | string) =>
  createSelector(
    selectAllEntities,
    entities => entities[id]
  );
