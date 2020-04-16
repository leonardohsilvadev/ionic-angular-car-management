import { Acessorio } from './../../../models/acessorio';
import { Carro } from './../../../models/carro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  public carro: Carro;
  public acessorios: Acessorio[] = [
    { nome: 'Freio ABS', preco: 800 },
    { nome: 'Ar-Condicionado', preco: 1000 },
    { nome: 'Som Multimídia', preco: 500 }
  ];
  private _precoTotal: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.carro) {
        this.carro = JSON.parse(params.carro);
      }
    });
    this._precoTotal = this.carro.preco;
  }

  atualizarTotal(ativado: boolean, acessorio: Acessorio) {
    ativado ? this._precoTotal += acessorio.preco : this._precoTotal -= acessorio.preco;
  }

  get precoTotal() {
    return this._precoTotal
  }
}
