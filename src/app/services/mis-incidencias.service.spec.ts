import { TestBed } from '@angular/core/testing';

import { MisIncidenciasService } from './mis-incidencias.service';

describe('MisIncidenciasService', () => {
  let service: MisIncidenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisIncidenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
