import {PizzaEntities} from "../pizzas.reducers";
import {Pizza} from "../../../models";

export const fromPizzasToPizzaEntities = (entities: PizzaEntities, data: Pizza[]): PizzaEntities => data.reduce((memo: PizzaEntities, pizza: Pizza) => {
  return {
    ...memo,
    [pizza.id]: pizza
  }
}, entities);
