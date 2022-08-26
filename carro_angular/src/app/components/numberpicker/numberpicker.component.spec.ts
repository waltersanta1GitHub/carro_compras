/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumberpickerComponent } from './numberpicker.component';

describe('NumberpickerComponent', () => {
  let component: NumberpickerComponent;
  let fixture: ComponentFixture<NumberpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
