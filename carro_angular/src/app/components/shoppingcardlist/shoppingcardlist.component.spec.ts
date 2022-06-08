import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcardlistComponent } from './shoppingcardlist.component';

describe('ShoppingcardlistComponent', () => {
  let component: ShoppingcardlistComponent;
  let fixture: ComponentFixture<ShoppingcardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingcardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
