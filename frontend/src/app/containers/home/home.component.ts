import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { ShopService } from '../../services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    // Заносим HTML элимент с атрибутам id='input' в переменную
    public inputElement = document.querySelector('#input');

    constructor(private shopService: ShopService) { }

    onKey(event: any) {
        const text = event.target.value;
        if (text.length > 2) {
            this.shopService.searchItems(text);
        } else {
            this.shopService.searchItems('');
        }
    }
}
