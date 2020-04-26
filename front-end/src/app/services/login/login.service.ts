import { Usuario } from './../../../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _usuarioLogado: Usuario;

  constructor(private httpClient: HttpClient) { }

  login(email, senha) {
    return this.httpClient.post<Usuario>('http://localhost:8080/api/login', { email, senha })
      .pipe(tap((usuario: Usuario) => this._usuarioLogado = usuario));
  }

  getUsuarioLogado() {
    return this._usuarioLogado;
  }
}
