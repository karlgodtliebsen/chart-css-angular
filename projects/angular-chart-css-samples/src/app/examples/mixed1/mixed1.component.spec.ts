import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mixed1Component } from './mixed1.component';

describe('Mixed1Component', () => {
  let component: Mixed1Component;
  let fixture: ComponentFixture<Mixed1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mixed1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mixed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
