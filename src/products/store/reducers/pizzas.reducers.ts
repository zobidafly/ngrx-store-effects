import * as fromPizzas from "../actions/pizzas.actions";
import {Pizza} from "../../models/pizza.model";

export interface PizzaState {
  data: Pizza[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: PizzaState = {
  data: [
    {
      "name": "Blazin' Inferno",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 4,
          "name": "chili"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        }
      ],
      "id": 1
    },
    {
      "name": "Seaside Surfin'",
      "toppings": [
        {
          "id": 6,
          "name": "mushroom"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 1,
          "name": "anchovy"
        },
        {
          "id": 8,
          "name": "onion"
        },
        {
          "id": 11,
          "name": "sweetcorn"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 5,
          "name": "mozzarella"
        }
      ],
      "id": 2
    },
    {
      "name": "Plain Ol' Pepperoni",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        }
      ],
      "id": 3
    }],
  loaded: false,
  loading: false
}

export function reducer(
  state: PizzaState = initialState,
  action: fromPizzas.PizzasAction
):PizzaState{
  switch (action.type){
    case fromPizzas.LOAD_PIZZAS:{
      return{...state,loading:true};
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS:{
      return{...state,loading:false,loaded:true};
    }
    case fromPizzas.LOAD_PIZZAS_FAIL:{
      return{...state,loading:false,loaded:false};
    }
  }
  return state;
}

/**
 * selector functions
 * @param state
 */
export const getPizzas=(state:PizzaState)=>state.data;
export const getPizzasLoading=(state:PizzaState)=>state.loading;
export const getPizzasLoaded=(state:PizzaState)=>state.loaded;
