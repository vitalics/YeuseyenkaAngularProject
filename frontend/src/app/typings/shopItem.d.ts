declare module "@shop/item" {
  export interface Item {
    id: number;
    name: string;
    description?: string;
    imageUrl?: string;
  }
  // расширяем обычный Item
  export interface BasketItem extends Item {
    count: number;
  }
}
