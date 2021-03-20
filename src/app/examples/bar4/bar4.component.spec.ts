import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar4Component } from './bar4.component';

describe('Bar4Component', () => {
  let component: Bar4Component;
  let fixture: ComponentFixture<Bar4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bar4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
