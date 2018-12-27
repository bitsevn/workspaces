import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { IndicesActionTypes } from "./indices.actions";

@Injectable()
export class IndicesEffects {
  @Effect()
  loadIndicess$ = this.actions$.pipe(ofType(IndicesActionTypes.INDICES_LOADED));

  constructor(private actions$: Actions) {}
}
