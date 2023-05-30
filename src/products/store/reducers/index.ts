import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

import * as fromPizzas from "./pizzas.reducers";
import * as fromToppings from "./toppings.reducers";
import {ToppingState} from "../models/toppings.models";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: ToppingState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer
}
export const getProductsState = createFeatureSelector<ProductsState>('products');

