import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAgendamentosPage } from './lista-agendamentos.page';

describe('ListaAgendamentosPage', () => {
  let component: ListaAgendamentosPage;
  let fixture: ComponentFixture<ListaAgendamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAgendamentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAgendamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
