import {Injectable} from "@angular/core";
import {Effect, Actions} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

import * as pizzaActions from '../actions/pizzas.actions';
import * as fromServices from '../../services';
import {Pizza} from "../../models/pizza.model";

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) {
  }

  // @Effect({dispatch:false})// set dispatch = false if we want to not dispatch actions that are made inside the function
  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map((pizzas:Pizza[]) => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      )
    })
  )
}
