import { Injectable } from '@angular/core';
import { Item, BasketItem } from '@shop/item';
import { mockItems } from './constant';

let GlobalId = 0;
const basketList: BasketItem[] = JSON.parse(localStorage.getItem('basket')) || [];
@Injectable()
export class BasketService {
  constructor() {
  }

  public addItemToBasket(shopItem: Item): void {
    // создаем новый объект
    const addableItem = Object.assign({}, {
      ...shopItem,
      basketId: GlobalId
    });
    // добавляем в массив
    basketList.push(addableItem);
    GlobalId++;
  }
  public removeItemFromBasket(item: BasketItem): void {
    // невозможно удалить из пустого массива предмет
    if (basketList.length <= 0) {
      throw new Error('basket is empty');
    }
    // удаляем из массива по basketId один предмет
    // метод splice не удаляет элемент, если он единственный
    if (basketList.length === 1) {
      basketList.pop();
    } else {
      basketList.splice(item.basketId, 1);
    }
  }
  public getBasketItems(): BasketItem[] {
    return basketList;
  }
}
