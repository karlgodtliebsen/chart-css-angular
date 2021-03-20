import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Area1Component } from './area1.component';

describe('Area1Component', () => {
  let component: Area1Component;
  let fixture: ComponentFixture<Area1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Area1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Area1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
