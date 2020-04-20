import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { Agendamento } from 'src/models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoDaoService {

  constructor(private storage: Storage) { }

  private gerarKey(agendamento: Agendamento) {
    return agendamento.emailCliente + agendamento.data.substr(0, 10);
  }

  salvar(agendamento: Agendamento) {
    const key = this.gerarKey(agendamento);
    const promise = this.storage.set(key, agendamento);
    return from(promise);
    // ou await this.storage.set(key, agendamento);
  }

  duplicado(agendamento: Agendamento) {
    const key = this.gerarKey(agendamento);
    const duplicado = this.storage.get(key).then(value => value ? true : false);
    return from(duplicado);
  }
}
