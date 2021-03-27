import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar3dComponent } from './bar3d.component';

describe('Bar3dComponent', () => {
  let component: Bar3dComponent;
  let fixture: ComponentFixture<Bar3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bar3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bar3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
