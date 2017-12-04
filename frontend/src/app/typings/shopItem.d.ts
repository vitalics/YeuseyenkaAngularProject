declare module "@shop/item" {
  export interface Item {
    id: number;
    name: string;
    description?: string;
  }
  // расширяем обычный Item
  export interface BasketItem extends Item {
    basketId: number;
  }
}
