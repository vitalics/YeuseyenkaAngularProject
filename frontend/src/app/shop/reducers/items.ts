import * as _ from 'lodash';
import * as items from '../actions/items';

import { Item } from "@shop/shop";
import { ShopState } from 'app/shop/typings/shop.state';


const initialState: ShopState = {
  loaded: false,
  loading: false,
  items: []
};

export function reducer(state = initialState, action: items.Actions): ShopState {
  switch (action.type) {
    case items.ActionTypes.LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
        items: []
      };
    case items.ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        items: _.clone(action.payload)
      };
    default:
      return state;
  }
}

export const getLoaded = (state: ShopState) => state.loaded;
export const getLoading = (state: ShopState) => state.loading;
export const getItems = (state: ShopState) => state.items;
