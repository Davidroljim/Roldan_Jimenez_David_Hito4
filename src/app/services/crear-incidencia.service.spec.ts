import { TestBed } from '@angular/core/testing';

import { CrearIncidenciaService } from './crear-incidencia.service';

describe('CrearIncidenciaService', () => {
  let service: CrearIncidenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearIncidenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
