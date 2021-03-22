import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Area2Component } from './area2.component';

describe('Area2Component', () => {
  let component: Area2Component;
  let fixture: ComponentFixture<Area2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Area2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Area2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
