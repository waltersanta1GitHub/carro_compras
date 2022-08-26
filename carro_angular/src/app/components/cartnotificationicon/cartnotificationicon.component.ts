import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartnotificationicon',
  templateUrl: './cartnotificationicon.component.html',
  styleUrls: ['./cartnotificationicon.component.css']
})
export class CartnotificationiconComponent implements OnInit {

  @Input() currentCount:number;
  constructor() {
    this.currentCount=10;

  }

  ngOnInit() {
  }

}
