import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    usuario: [''],
    contrasena: [''],
  });


  constructor(private router: Router, private formBuilder: FormBuilder,
     private notifyService: AlertService, private authService: AuthenticationService ) { }

  ngOnInit(): void {
  }

  hizoClick(): void {
    const valorformulario = this.loginForm.value;

    if (valorformulario.usuario == "gabi" && valorformulario.contrasena == ("1111")) {
      this.notifyService.mostrarMensajeExitoso('CORRECTO', 'FELIDADES');
      // this.authService.login();
      this.router.navigateByUrl('/home');
    }
    else {
     this.notifyService.mostrarError('ERROR ***', 'FALSO')
      this.router.navigateByUrl('/login');
    }


  }

}
