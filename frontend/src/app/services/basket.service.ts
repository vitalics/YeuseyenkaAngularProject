import { Injectable } from '@angular/core';
import { Item, BasketItem } from '@shop/item';
import { mockItems } from './constant';

const basketList: BasketItem[] = JSON.parse(localStorage.getItem('basket')) || [];
@Injectable()
export class BasketService {
  constructor() {
  }

  public addItemToBasket(shopItem: Item): void {
    const sameItem: BasketItem = basketList.find(item => item.id === shopItem.id);
    let addableItem: BasketItem;
    if (sameItem) {
      sameItem.count += 1;
    } else {
      addableItem = Object.assign({}, {
        ...shopItem,
        count: 1
      });
      basketList.push(addableItem);
    }
  }
  public removeItemFromBasket(basketItem: BasketItem): void {
    if (basketList.length <= 0) {
      throw new Error('basket is empty');
    }
    if (basketItem.count === 1) {
      const findableIndex = basketList.findIndex(item => item.id === basketItem.id);
      basketList.splice(findableIndex, 1);
      // basketList.pop();
    } else if (basketItem.count > 1) {
      basketItem.count -= 1;
    }
  }
  public getBasketItems(): BasketItem[] {
    return basketList;
  }
}
