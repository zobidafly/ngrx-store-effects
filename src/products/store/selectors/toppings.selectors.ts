import {createSelector} from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromReducers from "../reducers/toppings.reducers";
import {ToppingEntities} from "../toppings.models";

export const getToppingState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.toppings);
export const getToppingEntities = createSelector(getToppingState, fromReducers.getToppingEntities);
export const getAllToppings = createSelector(getToppingEntities, (entities: ToppingEntities) => Object.values(entities));
export const getToppingsLoading = createSelector(getToppingState, fromReducers.getToppingsLoading);
export const getToppingsLoaded = createSelector(getToppingState, fromReducers.getToppingsLoaded);
