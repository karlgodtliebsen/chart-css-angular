import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Line2Component } from './line2.component';

describe('Line2Component', () => {
  let component: Line2Component;
  let fixture: ComponentFixture<Line2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Line2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Line2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
