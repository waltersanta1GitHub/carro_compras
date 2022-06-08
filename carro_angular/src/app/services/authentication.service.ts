import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Usuario } from '../models/usuariomodel';

const helper = new JwtHelperService();

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;
  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.validarToken();

    this.apiUrl = environment.apiUrl;
    this.currentUserSubject = new BehaviorSubject<Usuario>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${this.apiUrl}/usuarios/autenticar`, { username, password })
      .pipe(
        map((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', "TOKENSAMEPM123434$$%");
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  private validarToken(): void {
    const tokenUsuario = localStorage.getItem('token')||"";
    const isExpirado = helper.isTokenExpired(tokenUsuario);
  }
}
