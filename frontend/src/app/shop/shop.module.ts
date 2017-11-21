import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './containers';
import { ShopService } from './services/shop.service';
import { ItemsEffectsService } from './effects/items-effects.service';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpModule,
    StoreModule,
    EffectsModule.run(ItemsEffectsService)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    ShopService,
    ItemsEffectsService
  ]
})
export class ShopModule {
  constructor() {
    console.log('Shop module instantiated.');
  }
}
