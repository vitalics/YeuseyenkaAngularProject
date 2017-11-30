import { Injectable } from '@angular/core';
import { Item } from '@shop/item';

const mockItems: Item[] = [
  {
    id: 1,
    name: 'some item',
    description: 'description for site'
  },
  {
    id: 2,
    name: 'some item2'
  }
];

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
