import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import {
    BasketListComponent,
    ShopListComponent,
    HomeComponent
} from './containers';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'shop',
        component: ShopListComponent
    },
    {
        path: 'basket',
        component: BasketListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
