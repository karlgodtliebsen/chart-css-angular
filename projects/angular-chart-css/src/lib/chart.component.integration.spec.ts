import {createComponentFactory, SpectatorHost, createHostFactory} from '@ngneat/spectator';
import {ChartComponent} from './index';

const createHost = createHostFactory({
  component: ChartComponent,
  // providers: [ BrowserModule, CommonModule, NoopAnimationsModule],
});
const createComponent = createComponentFactory(ChartComponent);

describe('Should Create Empty ChartComponent', () => {
  let component: ChartComponent;
  let spectator: SpectatorHost<ChartComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    spectator = createHost(`<chart-css></chart-css>`);
    component = spectator.component;
    element = spectator.element;
  });

  it('And have valid Spectator with component', () => {
    expect(spectator).toBeTruthy();
    expect(spectator.component).toBeTruthy();
    expect(spectator.element).toBeTruthy();
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });
});

describe('Should Create Valid ChartComponent', () => {
  let component: ChartComponent;
  let spectator: SpectatorHost<ChartComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    spectator = createHost(`<chart-css
            [chartId]="'area-chart-1'"
            [type]="'area'"
            [caption]="'Area 1 expenses'"
            [showData]=false
            [showDataOnHover]="true"
            [legendShape]="'legend-line'"
            [hideLabelsNth]="2"
            [dataSpacing]="0"
            >
</chart-css>`);
    component = spectator.component;
    element = spectator.element;
    component.ngOnInit();
    spectator.detectChanges();
  });

  it('And have valid component state', () => {

   // console.log(component);
    const table = element.querySelector('table');
  //  console.log(table);
    expect(component).toBeTruthy();
    expect(component.type).toBe('area');
    expect(component.caption).toBe('Area 1 expenses');
    expect(component.chartId).toBeTruthy();
    expect(component.reverse).toBeFalse();
    expect(component.stacked).toBeFalse();
    expect(component.dataSpacing).toBe(0);
    expect(component.hideLabelsNth).toBe(2);
    expect(component.legendShape).toBe('legend-line');

    expect(component.showData).toBeFalse();
    expect(component.showDataOnHover).toBeTrue();

  });
});
