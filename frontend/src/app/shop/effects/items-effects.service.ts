import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ShopService } from '../services/shop.service';
import * as items from '../actions/items';

import { Item } from "@shop/shop";

@Injectable()
export class ItemsEffectsService {
  @Effect()
  loadShopItems$: Observable<Action> = this.actions$
    .ofType(items.ActionTypes.LOAD)
    .switchMap((action: items.LoadAction) => this.shopService.getShopitems())
    .map((payload: Item[]) => new items.LoadSuccessAction(payload))
    .catch(() => of(new items.LoadFailAction('Failed to load todos')));

  @Effect({ dispatch: false })
  loadShopItemsFail$: Observable<Action> = this.actions$
    .ofType(items.ActionTypes.LOAD_FAIL)
    .do((action: items.LoadFailAction) => console.error(action.payload));

  constructor(private actions$: Actions,
    private shopService: ShopService) { }
}
