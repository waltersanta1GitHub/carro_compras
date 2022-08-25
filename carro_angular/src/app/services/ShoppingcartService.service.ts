import { Injectable } from '@angular/core';
import { Producto } from '../models/productmodel';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcartServiceService {
  placeholder: Producto[] = [];
  cartItems = new BehaviorSubject([]);

  constructor() {
    const currentCard = this.getCardData();
    if (currentCard) this.cartItems.next(currentCard);
  }

  addProductToCart(product: Producto) {
    const currentCard = this.getCardData();

    let productExist: Producto;

    if (currentCard) {
      productExist = currentCard.find((item: Producto) => {
        return item.id === product.id;
      });

      if (productExist) {
        productExist.quantity++;
        this.setCardData(currentCard);
      } else {
        if (currentCard) {
          const newData = [...currentCard, product];
          this.setCardData(newData);
          this.cartItems.next(this.getCardData());
        }

        this.placeholder.push(product);
        this.setCardData(this.placeholder);
        this.cartItems.next(this.getCardData());
      }
    }
  }


  getCardData() {
    return JSON.parse(localStorage.getItem('cart') || '');
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
