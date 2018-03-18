import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUpComponentComponent } from './log-up-component.component';

describe('LogUpComponentComponent', () => {
  let component: LogUpComponentComponent;
  let fixture: ComponentFixture<LogUpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogUpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogUpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
