import * as fromPizzas from "./pizzas.reducers";
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
}
export const getProductsState = createFeatureSelector<ProductsState>('products');

//*** List of Selectors (to get through the product pizzas tree ***//
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);
export const getPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
