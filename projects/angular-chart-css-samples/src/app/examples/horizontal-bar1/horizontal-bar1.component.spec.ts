import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBar1Component } from './horizontal-bar1.component';

describe('HorizontalBar1Component', () => {
  let component: HorizontalBar1Component;
  let fixture: ComponentFixture<HorizontalBar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalBar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
