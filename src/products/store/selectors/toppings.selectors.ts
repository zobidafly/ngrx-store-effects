import {createSelector} from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromReducers from "../reducers/toppings.reducers";
import {ToppingEntities} from "../models/toppings.models";

export const getToppingsState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.toppings);
export const getToppingEntities = createSelector(getToppingsState, fromReducers.getToppingEntities);
export const getAllToppings = createSelector(getToppingEntities, (entities: ToppingEntities) => Object.values(entities));
export const getToppingsLoading = createSelector(getToppingsState, fromReducers.getToppingsLoading);
export const getToppingsLoaded = createSelector(getToppingsState, fromReducers.getToppingsLoaded);
