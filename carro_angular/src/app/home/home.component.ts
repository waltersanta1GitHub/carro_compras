import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/productmodel';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaprod: Producto[] = [];

  constructor(private _productervice: ProductService) {

  }

  ngOnInit(): void {


    this._productervice.getAll().subscribe(

      ((respuesta: any) => {
        this.listaprod = respuesta.data;
    }));

  }

}
