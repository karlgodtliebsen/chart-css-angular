import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pie1Component } from './pie1.component';

describe('Pie1Component', () => {
  let component: Pie1Component;
  let fixture: ComponentFixture<Pie1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pie1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
