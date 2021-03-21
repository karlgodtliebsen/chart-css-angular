import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Line3Component } from './line3.component';

describe('Line3Component', () => {
  let component: Line3Component;
  let fixture: ComponentFixture<Line3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Line3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Line3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
