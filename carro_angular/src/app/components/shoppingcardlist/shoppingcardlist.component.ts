import { Component, Input, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cartmodel';
import { Producto } from 'src/app/models/productmodel';

@Component({
  selector: 'app-shoppingcardlist',
  templateUrl: './shoppingcardlist.component.html',
  styleUrls: ['./shoppingcardlist.component.css']
})
export class ShoppingcardlistComponent implements OnInit {

  @Input() cartItem : any;
  totalImpuestos:number=0;
  totalAPagar:number=0;

  constructor() {
   }
  ngOnInit(): void {

this.setTotals();

  }



  setTotals(){

    let sumatoital=0;
    let sumaimpuestos=0;

    this.cartItem.products.forEach( (prodActual: Producto) => {

      sumatoital = sumatoital + (prodActual.quantity * prodActual.price)

    });

    sumaimpuestos= (19 * sumatoital)/100;
    this.cartItem.tax = sumaimpuestos;
    this.cartItem.totalprice=sumatoital + sumaimpuestos;

  }

  quitarProducto(){

    this.cartItem.products= this.cartItem.products.filter((prodActual: Producto) => prodActual.id !== 1);
    this.setTotals();

  }

  actualizaCantidad(event:any){

    let productExist: Producto;
    console.log(event);
    productExist = this.cartItem.products.find((item: Producto) => item.id === event.id);

    if (productExist) {
      productExist.quantity = event.quantity;

    }

  }



}
