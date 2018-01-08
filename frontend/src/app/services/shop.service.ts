import { Injectable } from '@angular/core';
import { Item } from '@shop/item';

// вынесли в фаил константу
import { mockItems } from './constant';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShopService {

  private thread$: Subject<Item[]> = new Subject();

  constructor() { }

  public getItems(): Observable<Item[]> {
    return this.thread$;
  }

  public getItemById(id: number): Item {
    // находим нужный элемент
    const searhableItem = mockItems.find(item => item.id === id);
    return searhableItem;
  }

  public searchItems(term: string): void {
    if (term === '') {
      this.thread$.next(mockItems);
    } else {
      const selectItems: Item[] = mockItems.filter((value: Item) => {
        const itemName = value.name.toLocaleLowerCase();
        const searchText = term.toLocaleLowerCase();
        if (itemName.indexOf(searchText) !== -1) {
          return value;
        }
      });
      this.thread$.next(selectItems);
    }
  }
}
