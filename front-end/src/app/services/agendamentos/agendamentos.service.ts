import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Agendamento } from 'src/models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  constructor(private httpClient: HttpClient) { }

  agendar(agendamento: Agendamento) {
    return this.httpClient.post('http://localhost:8080/api/agendamento/agenda', agendamento)
      .pipe(tap(() => agendamento.enviado = true))
      .pipe(catchError(() => of(new Error('Agendamento não realizado'))))
  }
}
