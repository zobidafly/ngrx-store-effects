import {Injectable} from "@angular/core";
import {Effect, Actions} from "@ngrx/effects";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

import * as fromActions from '../actions/toppings.actions';
import * as fromServices from '../../services';
import {Topping} from "../../models";

@Injectable()
export class ToppingsEffects {
  constructor(private actions$: Actions, private service: fromServices.ToppingsService) {
  }

  @Effect()
  loadToppings$ = this.actions$.ofType(fromActions.LOAD_TOPPINGS).pipe(
    tap(()=>console.log(`loadToppings$ is piping....`)),
    switchMap(() => this.service.getToppings().pipe(
      tap(()=>console.log(`service.getToppings has been called...`)),
      map((toppings: Topping[]) => new fromActions.LoadToppingsSuccess(toppings)),
      catchError((error: any) => of(new fromActions.LoadToppingsFail(error)))
    ))
  )
}
