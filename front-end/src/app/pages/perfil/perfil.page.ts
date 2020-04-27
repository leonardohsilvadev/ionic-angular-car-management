import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() { }

  get usuarioLogado() {
    return this.loginService.getUsuarioLogado();
  }

}
