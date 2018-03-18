import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfItemsComponentComponent } from './list-of-items-component.component';

describe('ListOfItemsComponentComponent', () => {
  let component: ListOfItemsComponentComponent;
  let fixture: ComponentFixture<ListOfItemsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfItemsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfItemsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
