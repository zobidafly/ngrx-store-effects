import {Action} from '@ngrx/store';
import {Pizza} from "../../models";

export type PizzasAction =
  | LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess;
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


// CREATE
export const CREATE_PIZZA: string = '[Products] Create Pizza';
export const CREATE_PIZZA_FAIL: string = '[Products] Create Pizza Fail';
export const CREATE_PIZZA_SUCCESS: string = '[Products] Create Pizza Success';

export class CreatePizza implements Action {
  readonly type: string = CREATE_PIZZA;

  constructor(public payload: Pizza) {
  }
}

export class CreatePizzaFail implements Action {
  readonly type: string = CREATE_PIZZA_FAIL;

  constructor(public payload: any) {
  }
}

export class CreatePizzaSuccess implements Action {
  readonly type: string = CREATE_PIZZA_SUCCESS;

  constructor(public payload: Pizza) {
  }

}
