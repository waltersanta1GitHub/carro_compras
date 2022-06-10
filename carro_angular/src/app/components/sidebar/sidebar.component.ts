import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isExpanded: boolean = false;
  @Input() listaTitulos: string[] = [];

  constructor() {
    if (this.listaTitulos.length <= 0) {
      this.listaTitulos = [
        'Escriba aqui un titulo 1',
        'Escriba aqui un titulo 2',
        'Escriba aqui un titulo 3',
      ];
    }
  }

  ngOnInit(): void {}
}
