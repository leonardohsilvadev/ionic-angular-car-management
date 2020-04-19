import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  constructor(private httpClient: HttpClient) { }

  agendar(agendamento) {
    return this.httpClient.post('http://localhost:8080/api/agendamento/agenda', agendamento);
  }
}
