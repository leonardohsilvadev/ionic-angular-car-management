import { CarrosService } from '../../services/carros/carros.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/models/carro';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public carros: Carro[];

  constructor(
    // private loadingController: LoadingController,
    public navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private carrosService: CarrosService
  ) { }

  ngOnInit() {
    // this.presentLoading();
    this.carrosService.lista()
      .subscribe(carros => {
        this.carros = carros;
      }, (err: HttpErrorResponse) => {
        this.alertController.create({
          message: 'Falha na requisição',
          header: 'aa',
          subHeader: 'bb'
        });
      }
      )
  }

  selecionarCarro(carro: Carro) {
    let navigationExtras: NavigationExtras = { queryParams: { carro: JSON.stringify(carro) } };

    this.router.navigate(['detalhes'], navigationExtras);
  }

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Carregando carros...',
  //   });
  //     return await loading.present();
  // }

}
