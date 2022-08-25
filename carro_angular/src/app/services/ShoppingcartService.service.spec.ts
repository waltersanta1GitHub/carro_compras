/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingcartServiceService } from './ShoppingcartService.service';

describe('Service: ShoppingcartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingcartServiceService]
    });
  });

  it('should ...', inject([ShoppingcartServiceService], (service: ShoppingcartServiceService) => {
    expect(service).toBeTruthy();
  }));
});
