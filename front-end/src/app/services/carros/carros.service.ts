import { Carro } from '../../../models/carro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private httpClient: HttpClient) { }

  lista() {
    return this.httpClient.get<Carro[]>('http://localhost:8080/api/carro/listaTodos');
  }
}
