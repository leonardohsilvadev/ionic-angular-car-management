import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAgendamentosPage } from './lista-agendamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAgendamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAgendamentosPageRoutingModule {}
