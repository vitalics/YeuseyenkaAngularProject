import { createReducer, State as AppState } from '../../shared/reducers';
import * as items from './items';
import { createSelector } from 'reselect';
import { ShopState } from 'app/shop/typings/shop.state';

export interface ExtendedState extends AppState {
  items: ShopState;
}

const reducers = {
  items: items.reducer
};

export const extendedReducer = createReducer(reducers);

export const getitemsState = (state: ExtendedState) => state.items;
export const getItems = createSelector(getitemsState, items.getItems);
export const getLoaded = createSelector(getitemsState, items.getLoaded);
export const getLoading = createSelector(getitemsState, items.getLoading);
