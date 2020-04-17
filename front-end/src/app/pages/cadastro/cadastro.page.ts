import { Carro } from './../../../models/carro';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.carro && params.precoTotal) {
        this.carro = JSON.parse(params.carro);
        this.precoTotal = JSON.parse(params.precoTotal);
      }
    })
  }

  agendar() {
    console.log('nome:', this.nome);
    console.log('endereço:', this.endereco);
    console.log('email:', this.email);
    console.log('data: ', this.data);
  }

}
