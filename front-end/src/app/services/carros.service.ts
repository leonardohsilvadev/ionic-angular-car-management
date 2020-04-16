import { Carro } from './../../models/carro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos');
  }
}
