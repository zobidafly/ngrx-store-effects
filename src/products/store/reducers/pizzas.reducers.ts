import * as fromPizzas from "../actions/pizzas.actions";
import {Pizza} from "../../models";
import {LoadPizzasSuccess} from "../actions";
import {fromPizzasToPizzaEntities} from "./ETL/pizzas.loaders";
import {CreatePizza, CreatePizzaSuccess} from "../actions/pizzas.actions";

export type PizzaEntities = { [id: number]: Pizza };

export interface PizzaState {
  entities: PizzaEntities;
  loading: boolean;
  loaded: boolean;
}

export const initialState: PizzaState = {
  entities: {},
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
      const entities: PizzaEntities = fromPizzasToPizzaEntities({...state.entities}, (action as LoadPizzasSuccess).payload);
      return {...state, loading: false, loaded: true, entities};
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {...state, loading: false, loaded: false};
    }

    case fromPizzas.CREATE_PIZZA_SUCCESS:{
      const entities: PizzaEntities = fromPizzasToPizzaEntities({...state.entities}, [(action as CreatePizzaSuccess).payload]);
      return {...state, loading: false, loaded: true, entities};

    }
  }
  return state;
}


/**
 * selector functions
 * @param state
 */
export const getPizzaEntities = (state: PizzaState) => state.entities;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
