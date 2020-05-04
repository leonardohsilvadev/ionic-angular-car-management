import { ApiService } from './../api-service/api.service';
import { Usuario } from './../../../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url: string;
  private _usuarioLogado: Usuario;

  constructor(private httpClient: HttpClient, private _apiService: ApiService) {
    this._url = this._apiService.url;
  }

  login(email, senha) {
    return this.httpClient.post<Usuario>(this._url + 'api/login', { email, senha })
      .pipe(tap((usuario: Usuario) => this._usuarioLogado = usuario));
  }

  getUsuarioLogado() {
    return this._usuarioLogado;
  }

  salvarAvatar(avatar) {
    localStorage.setItem('avatar', avatar);
  }

  obterAvatar() {
    return localStorage.getItem('avatar') ?
      localStorage.getItem('avatar') :
      '../../../assets/img/avatar-padrao.jpg';
  }
}
