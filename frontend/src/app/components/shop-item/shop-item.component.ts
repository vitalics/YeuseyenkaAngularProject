import { Component, Input } from '@angular/core';

import { Item } from '@shop/item';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent {
    // атрибут у тега
  @Input() public shopItem: Item;

  constructor() {}
}
