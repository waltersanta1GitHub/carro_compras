import { Component, Input, OnInit } from '@angular/core';
import { LinkModel } from 'src/app/models/linkmodel';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isExpanded: boolean = false;
  @Input() listaTitulos: LinkModel[] = [];

  constructor() {
    if (this.listaTitulos.length <= 0) {
      this.listaTitulos = [
        {titulo:"Home", url:"/home"},
        {titulo:"Carrito Compra", url:"/cart"}
      ];
    }
  }

  ngOnInit(): void {}
}
