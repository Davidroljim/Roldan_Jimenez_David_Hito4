import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIncComponent } from './edit-inc.component';

describe('EditIncComponent', () => {
  let component: EditIncComponent;
  let fixture: ComponentFixture<EditIncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
