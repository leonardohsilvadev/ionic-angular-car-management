import { AgendamentoDaoService } from './../../services/agendamento-dao/agendamento-dao.service';
import { AlertController } from '@ionic/angular';
import { AgendamentosService } from './../../services/agendamentos/agendamentos.service';
import { Carro } from './../../../models/carro';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/models/agendamento';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public carro: Carro;
  public precoTotal: number;

  public nome: string = '';
  public endereco: string = '';
  public email: string = '';
  public data: string = new Date().toISOString();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private agendamentosService: AgendamentosService,
    private alertController: AlertController,
    private agendamentoDaoService: AgendamentoDaoService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.carro && params.precoTotal) {
        this.carro = JSON.parse(params.carro);
        this.precoTotal = JSON.parse(params.precoTotal);
      }
    })
  }

  agendar() {
    if (!this.nome || !this.endereco || !this.email) {
      this.handleAlert('Erro', 'Preencha todos os campos');
      return;
    }

    const agendamento: Agendamento = {
      nomeCliente: this.nome,
      enderecoCliente: this.endereco,
      emailCliente: this.email,
      data: this.data,
      modeloCarro: this.carro.nome,
      precoTotal: this.precoTotal,
      confirmado: false,
      enviado: false
    };

    this.agendamentoDaoService.duplicado(agendamento)
      .pipe(mergeMap(duplicado => {
        if (duplicado) {
          throw new Error('Agendamento existente!');
        }

        return this.agendamentosService.agendar(agendamento);
      }))
      .pipe(mergeMap(value => {
        const observable = this.agendamentoDaoService.salvar(agendamento);

        if (value instanceof Error) {
          throw value;
        }

        return observable;
      })).
      subscribe(
        () => this.handleAlert('Sucesso', 'Agendamento realizado', () => this.router.navigate(['home'])),
        (err: Error) => this.handleAlert('Erro', err.message, () => this.router.navigate(['home']))
      )
  }

  async handleAlert(header, message, handler?) {
    const alert = await this.alertController.create({
      header, message, buttons: [{ text: 'OK', handler }]
    });
    await alert.present();
  }
}
