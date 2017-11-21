import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rootReducer } from '../shared/reducers/index';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { StateService } from 'app/root/services/state.service';
import { StateEffectsService } from 'app/root/effects/state-effects.service';
import { EffectsModule } from '@ngrx/effects/src/effects.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(rootReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    SharedModule.forRoot(),
    EffectsModule.run(StateEffectsService)
  ],
  providers: [
    StateService,
    StateEffectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule instantiated.');
  }
}
