import { Injectable } from '@angular/core';
import { Item } from '@shop/item';

// вынесли в фаил константу
import { mockItems } from './constant';

@Injectable()
export class ShopService {
  constructor() {}

  public getItems(): Item[] {
    return mockItems;
  }
  public getItemById(id: number): Item {
      // находим нужный элемент
    const searhableItem = mockItems.find(item => item.id === id);
    return searhableItem;
  }
}
