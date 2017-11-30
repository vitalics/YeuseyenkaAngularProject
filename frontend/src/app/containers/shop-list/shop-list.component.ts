import { Component, OnInit } from '@angular/core';

import { ShopService } from '../../services';
import { Item } from '@shop/item';

@Component({
  selector: 'app-shop-list',
  templateUrl: 'shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  public shopList: Item[] = [];
  constructor(private shopService: ShopService) {}
  ngOnInit() {
    this.shopList = this.shopService.getItems();
  }
}
