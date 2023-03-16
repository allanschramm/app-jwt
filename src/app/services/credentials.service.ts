import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { Cliente } from '../interfaces/cliente';
import { LoginModel } from '../interfaces/login-model';

const LOGIN_URL = "http://localhost:5000/api/auth/login";
const CLIENTES_URL = "http://localhost:5000/api/clientes/lista"


@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private http: HttpClient) { }

  validate(credentials: LoginModel) : Observable<AuthResponse> {
    return this.http.post<AuthResponse>(LOGIN_URL, credentials, {
      headers: new HttpHeaders({ "Content-Type": "application/json"})
    });
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(CLIENTES_URL);
  }
}
