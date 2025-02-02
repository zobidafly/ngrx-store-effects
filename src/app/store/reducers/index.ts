import * as fromRouter from '@ngrx/router-store';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {Params, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>("routerReducer");

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const {url} = routerState;//takes url from routerState
    const {queryParams} = routerState.root;//takes queryParams from routerState.root
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const {params} = state;
    return {url, queryParams, params};
  }
}
