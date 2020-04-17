import { Acessorio } from './../../../models/acessorio';
import { Carro } from './../../../models/carro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.carro) {
        this.carro = JSON.parse(params.carro);
      }
    });
    this._precoTotal = this.carro.preco;
  }

  atualizarTotal(ativado: boolean, acessorio: Acessorio) {
    ativado ? this._precoTotal += acessorio.preco : this._precoTotal -= acessorio.preco;
  }

  continuarCadastro() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        carro: JSON.stringify(this.carro),
        precoTotal: JSON.stringify(this._precoTotal)
      }
    };
    this.router.navigate(['cadastro'], navigationExtras);
  }

  get precoTotal() {
    return this._precoTotal
  }
}
