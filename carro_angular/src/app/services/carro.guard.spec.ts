import { TestBed } from '@angular/core/testing';

import { CarroGuard } from './carro.guard';

describe('CarroGuard', () => {
  let guard: CarroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CarroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
