import { TestBed } from '@angular/core/testing';

import { ListadoIncidenciasService } from './listado-incidencias.service';

describe('ListadoIncidenciasService', () => {
  let service: ListadoIncidenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoIncidenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
