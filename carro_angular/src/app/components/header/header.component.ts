import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CartModel } from 'src/app/models/cartmodel';
import { ShoppingcartService } from 'src/app/services/Shoppingcart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  nombreaplicacion: string = 'mi colombia';
  fecha: string = '';
  hora: string = '';
  prodInCartCount = 0;

  constructor(private _cartService: ShoppingcartService) {

    this._cartService.prodCountCountChange.subscribe(

      x => {
        console.log(x );
        this.prodInCartCount=x;
      }

    );



  }

  ngOnInit(): void {
    this.nombreaplicacion = this.nombreaplicacion.toUpperCase();

    const now = Date.now();
    this.fecha = now.toString();
    this.hora = now.toString();

  }

  getCartCount() {
    return this.prodInCartCount;
  }

  ngOnDestroy() {
    this._cartService.prodCountCountChange.unsubscribe();
  }
}
