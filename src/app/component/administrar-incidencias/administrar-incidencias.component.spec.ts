import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarIncidenciasComponent } from './administrar-incidencias.component';

describe('AdministrarIncidenciasComponent', () => {
  let component: AdministrarIncidenciasComponent;
  let fixture: ComponentFixture<AdministrarIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarIncidenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
