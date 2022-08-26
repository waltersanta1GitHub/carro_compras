import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProdEmiter } from 'src/app/models/prodemitermodel';

@Component({
  selector: 'app-numberpicker',
  templateUrl: './numberpicker.component.html',
  styleUrls: ['./numberpicker.component.css']
})
export class NumberpickerComponent implements OnInit {

  @Input() numero: number;
  @Input() productd: number;
  @Output() newNumberPickerEvent = new EventEmitter<ProdEmiter>();
  productoactual: ProdEmiter;
  constructor() {



   }

  ngOnInit() {
  }


  onMenosClick(event:any){
    this.numero--;
    this.productoactual.id=this.productd;
    this.productoactual.quantity=this.numero;
    this.newNumberPickerEvent.emit(this.productoactual);
  }

  onMasClick(event:any){
    this.numero++;
    this.productoactual.id=this.productd;
    this.productoactual.quantity=this.numero;
    this.newNumberPickerEvent.emit(this.productoactual);
  }

}
