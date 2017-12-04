import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '@shop/item';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent {
  // атрибут у тега
  @Input() public shopItem: Item;

  // добавляем событие
  @Output() public ShopItemClicked: EventEmitter<Item> = new EventEmitter<Item>();

  // добавляем еще одно событие
  @Output() public shopItemAddToBasket: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  // Пробрасываем наш выбранный предмет наверх
  // в данном случае shop-list.
  // Он подписан на это событие. см.containers/shop-list/shop-list.component.html
  public getItem(shopItem: Item): void {
    this.ShopItemClicked.emit(shopItem);
  }
  // пишем обработчик для днопки - добавления в избранные(карзнину)
  // пробрасываем событие наверх
  public addToBasket(item: Item) {
    this.shopItemAddToBasket.emit(item);
  }
}
