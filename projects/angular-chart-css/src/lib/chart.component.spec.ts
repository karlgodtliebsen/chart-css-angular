import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ChartComponent} from './chart.component';
import {DebugElement} from '@angular/core';
import {ChartModule} from './chart.module';
import {By} from '@angular/platform-browser';

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
    expect(debugElement).toBeDefined();
    expect(element).toBeDefined();
  });

  it('should validate table and classes', () => {
    const table = element.querySelector('table');
    expect(table).toBeTruthy();
    table.classList.contains('charts-css');
    table.classList.contains('charts');
    table.classList.contains('show-data-on-hover');
    table.classList.contains('show-data-axes');
    table.classList.contains('show-primary-axis');
    table.classList.contains('show-labels');

    table.classList.contains('column');
    table.classList.contains('labels-align-center');
    table.classList.contains('data-spacing-10');
  });

  it('should validate Components Initial state', () => {
    component.ngOnInit();
    expect(component.chartData).toBeTruthy();
    expect(component.type).toBe('column');
    expect(component.caption).toBeUndefined();
    expect(component.chartId).toBeUndefined();
    expect(component.reverse).toBeFalse();
    expect(component.stacked).toBeFalse();
    expect(component.dataSpacing).toBe(10);
    expect(component.dataSetsSpacing).toBe(0);
    expect(component.showPercentage).toBeFalse();
    expect(component.hideLabelsNth).toBe(-1);
    expect(component.showOnlyLabelsNth).toBe(-1);
    expect(component.legendShape).toBe('legend-circle');
    expect(component.showData).toBeFalse();
    expect(component.legendInline).toBeTrue();
    expect(component.showDataOnHover).toBeTrue();
  });


  it('should validate Components Customized state', () => {
    component.type = 'line';
    component.caption = 'caption';
    component.chartId = 'line-1';
    component.legendShape = 'legend-ellipse';
    component.showData = false;
    component.showDataOnHover = false;
    component.legendInline = false;

    component.hideLabelsNth = 2;
    component.showOnlyLabelsNth = 3;
    component.ngOnInit();

    expect(component.type).toBe('line');
    expect(component).toBeTruthy();
    expect(component.caption).toBe('caption');
    expect(component.chartId).toBe('line-1');
    expect(component.reverse).toBeFalse();
    expect(component.stacked).toBeFalse();
    expect(component.dataSpacing).toBe(0);
    expect(component.hideLabelsNth).toBe(2);
    expect(component.showOnlyLabelsNth).toBe(3);
    expect(component.legendShape).toBe('legend-ellipse');
    expect(component.legendInline).toBeFalse();
    expect(component.showData).toBeFalse();
    expect(component.showDataOnHover).toBeFalse();

  });


  it('should validate data', () => {
    component.caption = 'caption';
    component.chartId = 'line-1';
    component.legendShape = 'legend-ellipse';
    component.showData = false;
    component.showDataOnHover = false;

    component.hideLabelsNth = 2;
    component.showOnlyLabelsNth = 3;
    component.chartData = {
      labels: ['label 1', 'label 2'],
      legends: ['legend 1', 'legend 2'],
      colors: ['red', 'green', 'blue'],
      datasets: [
        {
          label: 'dataset label',
          rows: [100, 200, 300],
        }
      ],
    };
    component.ngOnInit();
    console.log(component);

    fixture.detectChanges();
    const table = element.querySelector('table');
    expect(table).toBeTruthy();
    console.log(table);

  });


//    const result= debugElement.query(By.css('p'));

//    const r: any = document.querySelector(':root');
  // Get the styles (properties and values) for the root
//    const rs = getComputedStyle(r);
  // expect(element).toHaveComputedStyle({ height: '242px' });

// charts-css chart show-data-on-hover show-data-axes show-primary-axis show-labels column labels-align-center data-spacing-10
});
