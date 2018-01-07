import { BasketSaverService } from '../../services/basketSaver.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { ShopService, BasketService } from '../../services';
import { Item } from '@shop/item';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-shop-list',
  templateUrl: 'shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopListComponent implements OnInit {
  @Input() public thread$: Subject<any>;

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

    // Подписываемся на изменения в потоке данных
    this.thread$.subscribe((searchRequest: string) => {
      this.searchItem(searchRequest);
    })
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

  // Метод который выбирает элементы
  private searchItem(term: string) {
    if (term == '') {
      this.shopList = this.shopService.getItems();
    } else {
      this.shopList = this.shopList.filter((value: Item) => value.name === term);
    }
  }
}
