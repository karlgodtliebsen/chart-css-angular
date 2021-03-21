import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';


import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  let spectator: Spectator<ChartComponent>;
  const createComponent = createComponentFactory(ChartComponent);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => spectator = createComponent());
/*
  it('should have a success class by default', () => {
    expect(spectator.query('button')).toHaveClass('success');
  });

  it('should set the class name according to the [className] input', () => {
    spectator.setInput('className', 'danger');
    expect(spectator.query('button')).toHaveClass('danger');
    expect(spectator.query('button')).not.toHaveClass('success');
  });
*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
