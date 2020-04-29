import { ApiService } from './../api-service/api.service';
import { Carro } from '../../../models/carro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  _url: string;

  constructor(private httpClient: HttpClient, private _apiService: ApiService) {
    this._url = this._apiService.url;
  }

  lista() {
    return this.httpClient.get<Carro[]>(this._url + 'api/carro/listaTodos');
  }
}
