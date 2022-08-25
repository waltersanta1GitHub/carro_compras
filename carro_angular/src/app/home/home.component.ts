import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/productmodel';
import { ProductService } from '../services/product.service';
import { ShoppingcartService } from '../services/Shoppingcart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaprod: Producto[] = [];

  constructor(private _productervice: ProductService,
      private _cartService: ShoppingcartService
     ) {

    console.log("por aqui paso");
  }

  ngOnInit(): void {


    this._productervice.getAll().subscribe(

      ((respuesta: any) => {
        this.listaprod = respuesta.data;
    }));

  }


  searchProduct(productname: string){

    this._productervice.getProductsByName(productname).subscribe(

      ((respuesta: any) => {
        this.listaprod = respuesta.data;
       this.addproductTocart( this.listaprod[0]);
    }));



  }

  addproductTocart(product: Producto){
   this._cartService.addProductToCart(product);

  }

}
