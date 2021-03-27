import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStackedBar1Component } from './horizontal-stacked-bar1.component';

describe('HorizontalStackedBar1Component', () => {
  let component: HorizontalStackedBar1Component;
  let fixture: ComponentFixture<HorizontalStackedBar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalStackedBar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalStackedBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
