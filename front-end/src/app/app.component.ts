import { Agendamento } from './../models/agendamento';
import { AgendamentoDaoService } from './services/agendamento-dao/agendamento-dao.service';
import { LoginService } from './services/login/login.service';
import { Router, RouterEvent } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages = [
    {
      title: 'Perfil',
      url: 'perfil',
      icon: 'person-circle-outline'
    },
    {
      title: 'Carros',
      url: 'home',
      icon: 'car-outline'
    },
    {
      title: 'Agendamentos',
      url: 'lista-agendamentos',
      icon: 'document-outline'
    }
  ];

  selectedPath = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,
    private loginService: LoginService,
    private oneSignal: OneSignal,
    private agendamentoDao: AgendamentoDaoService
  ) {
    this.initializeApp();

    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });

    this.oneSignal.startInit(
      'c16ffa82-4d96-40ca-916a-862987203ebe',
      'AAAA9FFRyW8:APA91bFIsRSyx8aQXtMdidvNdPigaHLP_dLYjAf35hD78DdFORxWVQlX2jUbamhQn8bd5CMt2vhNFPxn5fLg3rkShKNU7MaTK-53p8iKwnFrNz6PURnExMfh0j1USChCXRhtRqjtUKAb'
    )
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      let dadosAdicionais = data.notification.payload.additionalData;
      let agendamentoId = dadosAdicionais['agendamento-id'];

      this.agendamentoDao.recuperar(agendamentoId)
        .subscribe((agendamento: Agendamento) => {
          agendamento.confirmado = true;
          this.agendamentoDao.salvar(agendamento);
        })
    });
    this.oneSignal.endInit();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }

  get avatar() {
    return this.loginService.obterAvatar();
  }

  get usuarioLogado() {
    return this.loginService.getUsuarioLogado();
  }

}
