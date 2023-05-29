import {Action} from '@ngrx/store';
import {Pizza} from "../../models/pizza.model";

export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
export const LOAD_PIZZAS: string = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL: string = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS: string = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
  readonly type: string = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type: string = LOAD_PIZZAS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadPizzasSuccess implements Action {
  readonly type: string = LOAD_PIZZAS_SUCCESS;

  constructor(public payload: Pizza[]) {
  }

}
