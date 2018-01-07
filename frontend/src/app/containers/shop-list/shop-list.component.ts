import { BasketSaverService } from '../../services/basketSaver.service';
import { Component, OnInit } from '@angular/core';

import { ShopService, BasketService } from '../../services';
import { Item } from '@shop/item';

@Component({
  selector: 'app-shop-list',
  templateUrl: 'shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  public shopList: Item[] = [];
  constructor(
    private shopService: ShopService,
    private basketService: BasketService,
    private basketSaveService: BasketSaverService
  ) { }
  ngOnInit() {
    this.shopList = this.shopService.getItems();
    // изначально карзина пуста
    console.log(this.basketService.getBasketItems());
  }
  // обрабатываем наш предмет из магазина. Выводим в консоль
  public onShopItemClicked(shopItem: Item): void {
    console.log(shopItem);
  }
  public onShopItemAddToBasket(item: Item) {
    this.basketService.addItemToBasket(item);
    // смотрим, пуста ли карзина
    console.log(this.basketService.getBasketItems());
    // сохраняем результат при добавлении в корзину
    this.basketSaveService.save(this.basketService.getBasketItems());
  }
}
