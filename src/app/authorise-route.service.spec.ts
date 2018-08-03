import { TestBed, inject } from '@angular/core/testing';

import { AuthoriseRouteService } from './authorise-route.service';

describe('AuthoriseRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthoriseRouteService]
    });
  });

  it('should be created', inject([AuthoriseRouteService], (service: AuthoriseRouteService) => {
    expect(service).toBeTruthy();
  }));
});
