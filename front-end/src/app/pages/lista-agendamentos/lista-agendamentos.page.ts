import { AgendamentosService } from './../../services/agendamentos/agendamentos.service';
import { AlertController } from '@ionic/angular';
import { Agendamento } from './../../../models/agendamento';
import { AgendamentoDaoService } from './../../services/agendamento-dao/agendamento-dao.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-agendamentos',
  templateUrl: './lista-agendamentos.page.html',
  styleUrls: ['./lista-agendamentos.page.scss'],
})
export class ListaAgendamentosPage implements OnInit {
  agendamentos: Agendamento[];

  constructor(
    private agendamentoDaoService: AgendamentoDaoService,
    private alertController: AlertController,
    private agendamentosService: AgendamentosService
  ) { }

  ngOnInit() {
    this.agendamentoDaoService.listarTodos()
      .subscribe((agendamentos: Agendamento[]) => {
        this.agendamentos = agendamentos;
      });

    console.log('agendamentos:', this.agendamentos);
  }

  reenviar(agendamento: Agendamento) {
    return this.agendamentosService.agendar(agendamento)
      .pipe(mergeMap(value => {
        const observable = this.agendamentoDaoService.salvar(agendamento);

        if (value instanceof Error) {
          throw value;
        }

        return observable;
      })).subscribe(
        () => this.handleAlert('Sucesso', 'Agendamento reenviado'),
        (err: Error) => this.handleAlert('Erro', err.message)
      )
  }

  async handleAlert(header, message) {
    const alert = await this.alertController.create({
      header, message, buttons: [{ text: 'OK' }]
    });
    await alert.present();
  }

}
