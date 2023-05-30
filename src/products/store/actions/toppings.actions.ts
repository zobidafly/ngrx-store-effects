import {Action} from "@ngrx/store";
import {Topping} from "../../models";
import {LoadPizzasSuccess} from "./pizzas.actions";

export type ToppingsActions = LoadToppingsFail | LoadToppings | LoadPizzasSuccess;
export const LOAD_TOPPINGS: string = '[Products] Load Toppings';
export const LOAD_TOPPINGS_SUCCESS: string = '[Products] Load Toppings Success';
export const LOAD_TOPPINGS_FAIL: string = '[Products] Load Toppings Fail';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;

  constructor(public payload: Topping[]) {
  }
}
