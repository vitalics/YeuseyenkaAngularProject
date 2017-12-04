import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Item, BasketItem } from '@shop/item';
import { BasketService } from '../../services/';


@Component({
    selector: 'app-basket-list',
    templateUrl: './basket-list.component.html',
    styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {

    public basketList: BasketItem[] = [];

    constructor(
        private basketService: BasketService
    ) { }
    ngOnInit() {
        // получаем данные
        this.basketList = this.basketService.getBasketItems();
    }
    public onBasketRemoved(item: BasketItem): void {
        this.basketService.removeItemFromBasket(item);
        console.log(this.basketList);
    }
}
