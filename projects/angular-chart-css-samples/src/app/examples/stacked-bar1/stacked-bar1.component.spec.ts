import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBar1Component } from './stacked-bar1.component';

describe('StackedBar1Component', () => {
  let component: StackedBar1Component;
  let fixture: ComponentFixture<StackedBar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedBar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
