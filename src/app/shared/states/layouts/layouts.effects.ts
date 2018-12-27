import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { LayoutsActionTypes } from "./layouts.actions";

@Injectable()
export class LayoutsEffects {
  @Effect()
  loadLayoutss$ = this.actions$.pipe(ofType(LayoutsActionTypes.LAYOUTS_LOADED));

  constructor(private actions$: Actions) {}
}
