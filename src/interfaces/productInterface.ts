export interface ProductToAdd {
  name: string;
  amount: string;
}
export interface NewProduct extends ProductToAdd {
  id: number;
}

export interface IProduct extends NewProduct {
  orderId: number;
}