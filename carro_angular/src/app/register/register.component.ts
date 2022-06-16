import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    usuario: [''],
    contrasena: [''],
  });


  constructor(private router: Router, private formBuilder: FormBuilder,
    private notifyService: AlertService, private authService: AuthenticationService ) { }

  ngOnInit(): void {
  }

  registrar(){

    this.notifyService.mostrarAlerta("Esto es un ejemplo de alerta","Gaby Santamaria");

  }

}
