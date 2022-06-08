import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuariomodel';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    apiUrl: string;
    constructor(private http: HttpClient) {

      this.apiUrl =  environment.apiUrl;
     }

    getAll() {
        return this.http.get<Usuario[]>(`${this.apiUrl}/users`);
    }

    register(user: Usuario) {
        return this.http.post(`${this.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/users/${id}`);
    }
}
