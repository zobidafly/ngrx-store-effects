import {createSelector} from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromReducers from "../reducers/pizzas.reducers";
import {Pizza} from "../../models";

export const getPizzaState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.pizzas);
export const getPizzaEntities = createSelector(getPizzaState, fromReducers.getPizzaEntities);
export const getAllPizzas = createSelector(getPizzaEntities, (entities: fromReducers.PizzaEntities) => Object.values(entities));
export const getSelectedPizza =
  createSelector(getPizzaEntities,
    fromRoot.getRouterState,
    (entities, router): Pizza => router.state && entities[router.state.params.pizzaId]
  );
export const getAllPizzas_Alternate = createSelector(getPizzaEntities, (entities: fromReducers.PizzaEntities) => Object.keys(entities).map(pizzaId => entities[parseInt(pizzaId, 10)]));
export const getPizzasLoading = createSelector(getPizzaState, fromReducers.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzaState, fromReducers.getPizzasLoaded);
