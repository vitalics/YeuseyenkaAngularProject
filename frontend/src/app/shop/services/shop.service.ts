import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Item } from "@shop/shop";

import { environment } from '../../../environments/environment';

@Injectable()
export class ShopService {
  constructor(private http: Http) { }

  getShopitems(): Observable<Item[]> {
    return this.http.get(`${environment.baseApiUrl}/api/shopitems`)
      .map(res => res.json());
  }
}
