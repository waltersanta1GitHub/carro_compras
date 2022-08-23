import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  public productlist:any=[
    {
      image:"https://img.freepik.com/foto-gratis/huevos-marrones_2829-13455.jpg?w=2000",
      title:"Mens Premium Casual",
      description:"Slim fitting style",
      price:25
    }
  ];
  api: any;
  
  constructor() { }

  ngOnInit(): void {
  
   }



  }

