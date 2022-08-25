import { Component, Input, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cartmodel';

@Component({
  selector: 'app-shoppingcardlist',
  templateUrl: './shoppingcardlist.component.html',
  styleUrls: ['./shoppingcardlist.component.css']
})
export class ShoppingcardlistComponent implements OnInit {

  @Input() cartItem :CartModel;

  totalImpuestos:number=0;
  totalAPagar:number=0;

  constructor() {

      this.cartItem ={
        products:[
          {
            id:1,
            name:"Iphone 13",
            desc:"Es el telefono de mac",
            img:"https://itechcolombia.co/wp-content/uploads/2022/05/iphone-13-pro-max-graphite-select.png",
            price:300,
            quantity:1,
            rrp:0,
            date_added: new Date()
          },
          {
            id:2,
            name:"camiseta de BTS",
            desc:"Es el super camiseta",
            img:"https://itechcolombia.co/wp-content/uploads/2022/05/iphone-13-pro-max-graphite-select.png",
            price:50,
            quantity:2,
            rrp:0,
            date_added: new Date()
          }
        ],
        tax:0,
        totalprice:0
      };


   }

  ngOnInit(): void {
    console.log("aqui cargo el componente");
  }


  setTotals(){

    let sumatoital=0;
    let sumaimpuestos=0;

    this.cartItem.products.forEach(prodActual => {

      sumatoital = sumatoital + (prodActual.quantity * prodActual.price)

    });

    sumaimpuestos= (19 * sumatoital)/100;
    this.cartItem.tax = sumaimpuestos;
    this.cartItem.totalprice=sumatoital + sumaimpuestos;

  }

  quitarProducto(){

    this.cartItem.products= this.cartItem.products.filter((prod) => prod.id !== 1);
    this.setTotals();

  }



}
