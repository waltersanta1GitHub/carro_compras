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

  constructor(private _cartService: ShoppingcartService) {

    this.mycarttoday = _cartService.getCardData();


   }

  ngOnInit() {



  }


  traerTodosLosProductos(){

  }

}
