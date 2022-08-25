import { Injectable } from '@angular/core';
import { Producto } from '../models/productmodel';
import { BehaviorSubject, Subject} from 'rxjs';
import { CartModel } from '../models/cartmodel';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcartService {

  public prodCountCountChange: Subject<number> = new Subject();
  placeholder: Producto[] = [];
  cartItems = new BehaviorSubject([]);
  prodCount=0;

  constructor() {
    const currentCard = this.getCardData();
    if (currentCard){
      this.cartItems.next(currentCard);
    }
  }

  addProductToCart(product: Producto) {

    const currentCard = this.getCardData();
    let productExist: Producto;

    if (currentCard) {
      productExist = currentCard.products.find((item: Producto) => item.id === product.id);

          if (productExist) {
            console.log('Si existe el producto');
            productExist.quantity++;
            this.setCardData(currentCard);

          } else {
            if (currentCard) {
              const newData = [...currentCard.products, product];
              this.setCardData(newData);
              this.prodCount++;
              this.updateCount(this.prodCount)
              this.cartItems.next(this.getCardData());
            }

            this.placeholder.push(product);
            this.setProductInCartData(this.placeholder);
            this.cartItems.next(this.getCardData());
          }
    }
  }

  updateCount(count: number = 0): void {
    this.prodCount = count;
    this.prodCountCountChange.next(this.prodCount);
}

  getCardData() {

    if(!localStorage.hasOwnProperty('cart')){
      let emptycart: CartModel= {
        products:[],
        tax:0,
        totalprice:0
      }

      localStorage.setItem('cart', JSON.stringify(emptycart));
    }

    return JSON.parse(localStorage.getItem('cart') || '');

  }

  setProductInCartData(products: Producto[]) {

    let updateCart: CartModel= {
      products:products,
      tax:0,
      totalprice:0
    }


    localStorage.setItem('cart', JSON.stringify(updateCart));
  }

  setCardData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data));
  }

  numberOfProductsInACart() {
    let itemsInCart = JSON.parse(localStorage.getItem('cart') || '');
    return itemsInCart.length;
  }

  clearCart() {
    localStorage.clear();
  }

}
