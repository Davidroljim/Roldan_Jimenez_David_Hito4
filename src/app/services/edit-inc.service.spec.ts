import { TestBed } from '@angular/core/testing';

import { EditIncService } from './edit-inc.service';

describe('EditIncService', () => {
  let service: EditIncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditIncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
