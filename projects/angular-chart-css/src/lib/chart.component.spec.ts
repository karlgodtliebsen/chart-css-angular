import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ChartComponent} from './chart.component';
import {DebugElement} from '@angular/core';
import {ChartModule} from './chart.module';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let element: HTMLElement;
  let debugElement: DebugElement;

  // https://angular.io/guide/testing-components-basics

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(
      {
      declarations: [ChartComponent],
      imports: [ChartModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
    expect(element).toBeDefined();
    /*
   const p = bannerElement.querySelector('p');
  expect(p.textContent).toEqual('banner works!');
    */
  });
});
