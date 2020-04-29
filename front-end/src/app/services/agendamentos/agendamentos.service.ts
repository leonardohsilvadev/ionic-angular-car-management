import { ApiService } from './../api-service/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Agendamento } from 'src/models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  _url: string;

  constructor(private httpClient: HttpClient, private _apiService: ApiService) {
    this._url = this._apiService.url;
  }

  agendar(agendamento: Agendamento) {
    return this.httpClient.post(this._url + 'api/agendamento/agenda', agendamento)
      .pipe(tap(() => agendamento.enviado = true))
      .pipe(catchError(() => of(new Error('Agendamento não realizado'))))
  }
}
