import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Item, BasketItem } from '@shop/item';
import { BasketService, BasketSaverService } from '../../services/';

import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {

  public basketList: BasketItem[] = [];

  constructor(
    private basketService: BasketService,
    private basketSaverService: BasketSaverService,
    public snackBar: MatSnackBar
  ) { }
  ngOnInit() {
    // получаем данные
    this.basketList = this.basketService.getBasketItems();
  }

  public save() {
    this.basketSaverService.save(this.basketList);
    this.snackBar.open('saved', 'OK', {
      duration: 2000
    });
  }
  public onBasketRemoved(item: BasketItem): void {
    this.basketService.removeItemFromBasket(item);
    console.log(this.basketList);
  }
}
