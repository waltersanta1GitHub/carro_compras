import { Component, OnInit } from '@angular/core';
import { CartModel } from '../models/cartmodel';
import { ShoppingcartServiceService } from '../services/ShoppingcartService.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  mycarttoday:CartModel;

  constructor() {

    this.mycarttoday ={
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
          name:"Tenis Deportivos",
          desc:"Son los deportivos de Adidas blancos",
          img:"https://cf.shopee.com.co/file/6028ed66269db2709259367537c5dc51",
          price:30,
          quantity:2,
          rrp:0,
          date_added: new Date()
        }
      ],
      tax:0,
      totalprice:0
    };

   }

  ngOnInit() {
  }


  traerTodosLosProductos(){

  }

}
