import { Injectable } from '@angular/core';

import { Item, BasketItem } from '@shop/item';

import { mockItems } from './constant';

let GlobalId = 0;

@Injectable()
export class BasketService {
    constructor() {
    }

    public addItemToBasket(shopItem: Item): void {
        let objectBasket: BasketItem[] = JSON.parse(localStorage.getItem('basket'));
        // создаем новый объект
        const addableItem = Object.assign({}, {
            ...shopItem,
            basketId: GlobalId
        });
        // добавляем в массив
        objectBasket.push(addableItem);
        GlobalId++;
        localStorage.setItem('basket', JSON.stringify(objectBasket));
    }
    public removeItemFromBasket(item: BasketItem): void {
        let objectBasket: BasketItem[] = JSON.parse(localStorage.getItem('basket'));
        // невозможно удалить из пустого массива предмет
        if (objectBasket.length <= 0) {
            throw new Error('basket is empty');
        }
        // удаляем из массива по basketId один предмет
        // метод splice не удаляет элемент, если он единственный
        if (objectBasket.length === 1) {
            objectBasket.pop();
        } else {
            objectBasket.splice(item.basketId, 1);
        }
        localStorage.setItem('basket', JSON.stringify(objectBasket));
    }
    public getBasketItems(): BasketItem[] {
        let objectBasket: BasketItem[] = JSON.parse(localStorage.getItem('basket'));
        return objectBasket;
    }
}
