import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ShopService } from './services/shop.service';
// удобный импорт, мы бурем все экспорты из фаила index.ts
import { ShopItemComponent } from './components';
import { ShopListComponent } from './containers';

// declarate all of components, services, pipes
@NgModule({
  declarations: [
    AppComponent,
    ShopItemComponent,
    ShopListComponent
  ],
  imports: [BrowserModule],
  providers: [
    // Здесь декларируем сервисы
    ShopService
  ],
  // root component
  bootstrap: [AppComponent]
})
export class AppModule {}
