import * as fromToppings from "../actions/toppings.actions";
import {fromToppingsToToppingEntities} from "./ETL/toppings.loaders";
import {initialState, ToppingEntities, ToppingState} from "../models/toppings.models";

export function reducer(
  state: ToppingState = initialState,
  action: fromToppings.ToppingsActions
): ToppingState {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {...state, loading: true};
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const entities: ToppingEntities = fromToppingsToToppingEntities({...state.entities}, (action as fromToppings.LoadToppingsSuccess).payload);
      return {...state, loading: false, loaded: true, entities};
    }
    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {...state, loading: false, loaded: false};
    }
  }
  return state;
}

export const getToppingEntities = (state: ToppingState) => state.entities;
export const getToppingsLoading = (state: ToppingState) => state.loading;
export const getToppingsLoaded = (state: ToppingState) => state.loaded;
