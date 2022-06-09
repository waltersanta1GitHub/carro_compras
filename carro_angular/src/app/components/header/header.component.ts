import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombreaplicacion: string = "mi colombia";
  fecha: string = "";
  hora: string = "";
  constructor() { }

  ngOnInit(): void {
    this.nombreaplicacion = this.nombreaplicacion.toUpperCase();

    const now = Date.now();
    this.fecha=now.toString();
    this.hora=now.toString();
  }

}

