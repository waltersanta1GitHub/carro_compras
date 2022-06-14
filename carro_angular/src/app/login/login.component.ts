import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.sofia.group({
    usuario: [''],
    contrasena: [''],
  });


  constructor(private router: Router, private sofia: FormBuilder, private notifyService: AlertService) { }

  ngOnInit(): void {
  }

  hizoClick(): void {
    const valorformulario = this.loginForm.value;

    if (valorformulario.usuario == "gabi" && valorformulario.contrasena == ("1111")) {
      this.notifyService.mostrarMensajeExitoso('CORRECTO', 'FELIDADES')
      this.router.navigateByUrl('/home');
    }
    else {
      this.notifyService.mostrarError('ERROR', 'FALSO')
      this.router.navigateByUrl('/login');
    }


  }

}
