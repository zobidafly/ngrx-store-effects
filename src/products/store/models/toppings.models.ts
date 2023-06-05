import {Topping} from "../../models";

export * from '../../models/topping.model';
export type ToppingEntities = { [id: number]: Topping };

export interface ToppingState {
  entities: ToppingEntities;
  loading: boolean;
  loaded: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: []
}
