import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Line1Component } from './line1.component';

describe('Line1Component', () => {
  let component: Line1Component;
  let fixture: ComponentFixture<Line1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Line1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Line1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
