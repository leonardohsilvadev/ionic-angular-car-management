import { AlertController } from '@ionic/angular';
import { LoginService } from './../../services/login/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = 'joao@alura.com.br';
  senha: string = 'alura123';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() { }

  login() {
    this.loginService.login(this.email, this.senha)
      .subscribe(
        () => this.router.navigate(['home']),
        () => this.handleAlert()
      )
  }

  async handleAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Erro',
      message: 'Login ou senha inválidos. Tente novamente.',
      buttons: [{ text: 'OK' }]
    })

    alert.present();
  }

}
