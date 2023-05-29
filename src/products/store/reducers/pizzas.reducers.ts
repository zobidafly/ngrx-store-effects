import * as fromPizzas from "../actions/pizzas.actions";
import {Pizza} from "../../models/pizza.model";

export interface PizzaState {
  data: Pizza[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false
}

export function reducer(
  state: PizzaState = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {...state, loading: true};
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {...state, loading: false, loaded: true};
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {...state, loading: false, loaded: false};
    }
  }
  return state;
}

/**
 * selector functions
 * @param state
 */
export const getPizzas = (state: PizzaState) => state.data;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
