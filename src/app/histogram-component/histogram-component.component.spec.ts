import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramComponentComponent } from './histogram-component.component';

describe('HistogramComponentComponent', () => {
  let component: HistogramComponentComponent;
  let fixture: ComponentFixture<HistogramComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistogramComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistogramComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
