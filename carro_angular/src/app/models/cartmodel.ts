import { Producto } from "./productmodel";

export interface CartModel {
  products: Producto[];
  totalprice: number;
  tax:number;
}
