import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productmodel';
import { ShoppingcartService } from 'src/app/services/Shoppingcart.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  api: any;
  @Input () producto:Producto;
  constructor(private carritoservicio:ShoppingcartService) { }

  
  ngOnInit(): void {
  
   }
  agregarproducto(malumaproduct:Producto){
  this.carritoservicio.addProductToCart(malumaproduct);
  }


  }

