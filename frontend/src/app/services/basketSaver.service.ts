import { Injectable } from '@angular/core';

import { Item, BasketItem } from '@shop/item';

const BASKET_KEY = 'basket';

@Injectable()
export class BasketSaverService {
  constructor() {
  }
  /**
   *
   * @argument {BasketItem []} basketItems
   * @description saving items in storage
   */
  save(basketItems: BasketItem[]): void {
    const convertedData = JSON.stringify(basketItems);
    localStorage.setItem(BASKET_KEY, convertedData);
  }
  clear(): void {
    localStorage.removeItem(BASKET_KEY);
  }
}
