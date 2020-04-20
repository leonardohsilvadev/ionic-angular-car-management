import { TestBed } from '@angular/core/testing';

import { AgendamentoDaoService } from './agendamento-dao.service';

describe('AgendamentoDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgendamentoDaoService = TestBed.get(AgendamentoDaoService);
    expect(service).toBeTruthy();
  });
});
