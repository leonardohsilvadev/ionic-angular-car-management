import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAgendamentosPageRoutingModule } from './lista-agendamentos-routing.module';

import { ListaAgendamentosPage } from './lista-agendamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAgendamentosPageRoutingModule
  ],
  declarations: [ListaAgendamentosPage]
})
export class ListaAgendamentosPageModule {}
