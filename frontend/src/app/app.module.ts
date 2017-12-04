import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  ShopService,
  BasketService,
} from './services/';
// удобный импорт, мы бурем все экспорты из фаила index.ts
import {
  ShopItemComponent,
  BasketItemComponent
} from './components';
import {
  ShopListComponent,
  BasketListComponent,
  HomeComponent
} from './containers';

// импортируем модуль с роутингом
import { AppRoutingModule } from './app-routing.module';

// declarate all of components, services, pipes
@NgModule({
  declarations: [
    AppComponent,
    ShopItemComponent,
    ShopListComponent,
    // компоненты корзины
    BasketListComponent,
    BasketItemComponent,
    // домашний компонент
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // т.к. это модуль, его пишем в imports
    // здесь подключаются и third-party модули для angular
    AppRoutingModule
  ],
  providers: [
    // Здесь декларируем сервисы
    ShopService,
    // сервис по работе с корзиной
    BasketService,
  ],
  // run component
  bootstrap: [AppComponent]
})
export class AppModule { }
