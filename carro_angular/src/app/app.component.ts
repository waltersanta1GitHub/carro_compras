import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CARRITO DE COMPRAS ANGULAR - ';
  listaCategorias: string[] = [];

  constructor() {


  }

  ngOnInit(): void {

    this.listaCategorias =[
      "Campañas y ofertas",
      "Informatica","Gaming",
      "Accesorios de Informatica",
      "Telefonia",
      "Television",
      "Audio y HIFI",
      "Smart Home"
    ];


  }





}
