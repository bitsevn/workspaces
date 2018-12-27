import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { FundsActionTypes } from "./funds.actions";

@Injectable()
export class FundsEffects {
  @Effect()
  loadFundss$ = this.actions$.pipe(ofType(FundsActionTypes.FUNDS_LOADED));

  constructor(private actions$: Actions) {}
}
