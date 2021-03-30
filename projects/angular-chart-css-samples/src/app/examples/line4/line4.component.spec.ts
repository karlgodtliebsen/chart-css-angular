import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Line4Component } from './line4.component';

describe('Line4Component', () => {
  let component: Line4Component;
  let fixture: ComponentFixture<Line4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Line4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Line4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
