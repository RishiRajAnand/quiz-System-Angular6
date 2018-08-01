import { TestBed, inject } from '@angular/core/testing';

import { IdbConnectionService } from './idb-connection.service';

describe('IdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdbConnectionService]
    });
  });

  it('should be created', inject([IdbConnectionService], (service: IdbConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
