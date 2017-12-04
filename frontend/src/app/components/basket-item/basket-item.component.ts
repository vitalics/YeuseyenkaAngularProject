import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BasketItem } from '@shop/item';

@Component({
    selector: 'app-basket-item',
    templateUrl: './basket-item.component.html',
    styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {
    // входные данные
    @Input() public basketItem: BasketItem;
    // событие, выходные данные
    @Output() public basketRemoved: EventEmitter<BasketItem> = new EventEmitter();

    constructor() { }
    ngOnInit() { }

    public removeBasketItem(basketItem: BasketItem): void {
        this.basketRemoved.emit(basketItem);
    }
}
