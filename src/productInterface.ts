export interface ProductToAdd {
  name: string;
  amount: number;
}
export interface Product extends ProductToAdd {
  id: number;
}

// export interface IProduct extends Product {
//   order_id: number;
// }