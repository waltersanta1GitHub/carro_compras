import { Component, Input, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cartmodel';
import { Producto } from 'src/app/models/productmodel';
import { ShoppingcartService } from 'src/app/services/Shoppingcart.service';

@Component({
  selector: 'app-shoppingcardlist',
  templateUrl: './shoppingcardlist.component.html',
  styleUrls: ['./shoppingcardlist.component.css'],
})
export class ShoppingcardlistComponent implements OnInit {
  @Input() cartItem: any;
  totalImpuestos: number = 0;
  totalAPagar: number = 0;

  constructor(private _cartService: ShoppingcartService) {}
  ngOnInit(): void {
    this._cartService.prodCountCountChange.subscribe({
      next: (n) => {
        console.log('Observable A: ' + n);
      },
    });

    this.setTotals();
  }

  setTotals() {
    let sumatoital = 0;
    let sumaimpuestos = 0;

    this.cartItem.products.forEach((prodActual: Producto) => {
      sumatoital = sumatoital + prodActual.quantity * prodActual.price;
    });

    sumaimpuestos = (19 * sumatoital) / 100;
    this.cartItem.tax = sumaimpuestos;
    this.cartItem.totalprice = sumatoital + sumaimpuestos;
  }




  quitarProducto(prodActual:Producto) {
    this.cartItem.products = this.cartItem.products.filter(
      (prodActual: Producto) => prodActual.id !== 1
    );


    this._cartService.prodCountCountChange.next(this.cartItem.products.length);



    this.setTotals();
  }

  actualizaCantidad(btsProd: any) {
    let productExist: Producto;
    console.log(btsProd);
    
    productExist = this.cartItem.products.find((item: Producto) => item.id === btsProd.id);

   if (productExist) {
      productExist.quantity = btsProd.quantity;

    }

    this.setTotals();

  }
}
