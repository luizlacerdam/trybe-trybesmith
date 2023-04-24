export interface COrder {
  productsIds: number[];
}
export interface IOrder extends COrder {
  id?: number;
  userId: number;
}