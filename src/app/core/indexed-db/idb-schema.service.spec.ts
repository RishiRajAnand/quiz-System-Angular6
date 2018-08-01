import { TestBed, inject } from '@angular/core/testing';

import { DBSchemaService } from './idb-schema.service';

describe('BaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DBSchemaService]
    });
  });

  it('should be created', inject([DBSchemaService], (service: DBSchemaService) => {
    expect(service).toBeTruthy();
  }));
});
