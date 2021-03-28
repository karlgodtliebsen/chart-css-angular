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
    expect(component.multiple).toBeFalse();
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
      labels: ['label 1', 'label 2', 'label 3'],
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
    fixture.detectChanges();
    expect(component.multiple).toBeFalse();
    const table = element.querySelector('table');
    expect(table).toBeTruthy();
    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBe(3);
    const ul = element.querySelectorAll('ul');
    expect(ul.length).toBe(1);
    const li = element.querySelectorAll('li');
    expect(li.length).toBe(2);

  });

  it('should validate multiple datasets  overlayed', () => {
    component.caption = 'caption';
    component.chartId = 'line-1';
    component.legendShape = 'legend-ellipse';
    component.showData = false;
    component.showDataOnHover = false;
    component.hideLabelsNth = 2;
    component.showOnlyLabelsNth = 3;
    component.overlay = true;
    component.chartData = {
      labels: ['label 1', 'label 2', 'label 3'],
      legends: ['legend 1', 'legend 2'],
      colors: ['red', 'green', 'blue'],
      datasets: [
        {
          label: 'dataset 1 label',
          rows: [100, 200, 300],
        },
        {
          label: 'dataset 2 label',
          rows: [1000, 2000, 3000],
        }
      ],
    };
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.multiple).toBeTrue();
    expect(component.overlay).toBeTrue();
    const table = element.querySelectorAll('table');
    expect(table).toBeTruthy();
    expect(table.length).toBe(1);

    const rows = element.querySelectorAll('tr');
    expect(rows.length).toBe(3);

    const ul = element.querySelectorAll('ul');
    expect(ul.length).toBe(1);

    const li = element.querySelectorAll('li');
    expect(li.length).toBe(2);

  });


  it('should validate multiple datasets NOT overlayed', () => {
    component.caption = 'caption';
    component.chartId = 'line-1';
    component.legendShape = 'legend-ellipse';
    component.showData = false;
    component.showDataOnHover = false;
    component.hideLabelsNth = 2;
    component.showOnlyLabelsNth = 3;
    component.overlay = false;
    component.chartData = {
      labels: ['label 1', 'label 2', 'label 3'],
      legends: ['legend 1', 'legend 2'],
      colors: ['red', 'green', 'blue'],
      datasets: [
        {
          label: 'dataset 1 label',
          rows: [100, 200, 300],
        },
        {
          label: 'dataset 2 label',
          rows: [1000, 2000, 3000],
        }
      ],
    };
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.multiple).toBeTrue();

    const table = element.querySelectorAll('table');

    expect(table).toBeTruthy();
    expect(table.length).toBe(1);

    const rows = element.querySelectorAll('tr');
    expect(rows.length).toBe(2);

    const ul = element.querySelectorAll('ul');
    expect(ul.length).toBe(1);

    const li = element.querySelectorAll('li');
    expect(li.length).toBe(2);
  });


//    const result= debugElement.query(By.css('p'));

//    const r: any = document.querySelector(':root');
  // Get the styles (properties and values) for the root
//    const rs = getComputedStyle(r);
  // expect(element).toHaveComputedStyle({ height: '242px' });

// charts-css chart show-data-on-hover show-data-axes show-primary-axis show-labels column labels-align-center data-spacing-10
});
