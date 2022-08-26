/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartnotificationiconComponent } from './cartnotificationicon.component';

describe('CartnotificationiconComponent', () => {
  let component: CartnotificationiconComponent;
  let fixture: ComponentFixture<CartnotificationiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartnotificationiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartnotificationiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
