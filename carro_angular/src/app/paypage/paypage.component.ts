import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/notification.service';

@Component({
  selector: 'app-paypage',
  templateUrl: './paypage.component.html',
  styleUrls: ['./paypage.component.css']
})
export class PaypageComponent implements OnInit {


  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this.formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = false;


  paymentForm = this.formBuilder.group({
    businessname: [''],
    businessaddress: [''],
    city: [''],
    state: [''],
    zipcode: [''],
    creditcardnumber: [''],
  });

  constructor(private formBuilder: FormBuilder,
    private notifyService: AlertService,private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  pagar(){

  }

}
