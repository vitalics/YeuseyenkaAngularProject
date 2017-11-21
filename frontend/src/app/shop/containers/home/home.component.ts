import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Item } from "@shop/shop";
import * as root from '../../reducers';
import * as items from '../../actions/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public items: Item[];
  private itemsSubscription: Subscription;
  loaded$: Observable<boolean>;
  loading$: Observable<boolean>;
  items$: Observable<Item[]>;

  constructor(
    private store: Store<root.ExtendedState>
  ) {
    this.store.replaceReducer(root.extendedReducer);
    this.loaded$ = this.store.select(root.getLoaded);
    this.loading$ = this.store.select(root.getLoading);
    this.items$ = this.store.select(root.getItems);
  }

  ngOnInit() {
    this.itemsSubscription = this.items$.subscribe(items => this.items = items);
  }
  ngOnDestroy() {
    this.itemsSubscription.unsubscribe();
  }

  getItems(){
    this.store.dispatch(new items.LoadAction());
  }

}
