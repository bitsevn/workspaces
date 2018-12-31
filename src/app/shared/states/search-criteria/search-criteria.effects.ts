import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IStore } from '../../interfaces/store.interface';
import { SearchCriteriaActionTypes } from './search-criteria.actions';

@Injectable()
export class SearchCriteriaEffects {
  @Effect()
  clientChanged$ = this.actions$.pipe<number>(ofType(SearchCriteriaActionTypes.CLIENT_CHANGED));

  constructor(private actions$: Actions, private store: Store<IStore>) {}
}
