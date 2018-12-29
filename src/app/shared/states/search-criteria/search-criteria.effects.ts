import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SearchCriteriaActionTypes } from './search-criteria.actions';

@Injectable()
export class SearchCriteriaEffects {
  @Effect()
  loadSearchCriterias$ = this.actions$.pipe(ofType(SearchCriteriaActionTypes.BOOKMARK_CHANGED));

  constructor(private actions$: Actions) {}
}
