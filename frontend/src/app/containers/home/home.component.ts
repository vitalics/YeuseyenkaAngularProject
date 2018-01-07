import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    // Заносим HTML элимент с атрибутам id='input' в переменную
    public inputElement = document.querySelector('#input');
    // Сорздаём переменную для потока данных
    public thread$: Subject<any> = new Subject();

    onKey(event: any) {

        let text = event.target.value;
        if (text.length > 2) {
            this.thread$.next(text);
        } else {
            this.thread$.next('');
        }
    }
}
