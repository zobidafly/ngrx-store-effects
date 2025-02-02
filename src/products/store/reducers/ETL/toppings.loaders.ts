import {Topping, ToppingEntities} from "../../models/toppings.models";

export const fromToppingsToToppingEntities = (entities: ToppingEntities, data: Topping[]): ToppingEntities =>
  data.reduce((memo: ToppingEntities, topping: Topping) => {
    return {...memo, [topping.id]: topping};
  }, {...entities});
