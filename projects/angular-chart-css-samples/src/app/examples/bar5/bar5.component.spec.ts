import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar5Component } from './bar5.component';

describe('Bar5Component', () => {
  let component: Bar5Component;
  let fixture: ComponentFixture<Bar5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bar5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bar5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
