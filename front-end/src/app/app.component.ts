import { Router, RouterEvent } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages = [
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
    private router: Router
  ) {
    this.initializeApp();
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
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

}
