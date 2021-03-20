import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar3Component } from './bar3.component';

describe('Bar3Component', () => {
  let component: Bar3Component;
  let fixture: ComponentFixture<Bar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bar3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
