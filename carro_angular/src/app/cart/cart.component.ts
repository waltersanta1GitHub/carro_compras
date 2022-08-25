import { Component, OnInit } from '@angular/core';
import { CartModel } from '../models/cartmodel';
import { ShoppingcartService } from '../services/Shoppingcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  mycarttoday:CartModel;
  nombrehijo:string="Alejo";

  constructor(private _cartService: ShoppingcartService) {

    this.mycarttoday = _cartService.getCardData();
    console.log('trae los datos inicales de prod');
    console.log(this.mycarttoday);

   }

  ngOnInit() {

    console.log('trae los datos inicales de prod');
  }


  traerTodosLosProductos(){

  }

}
