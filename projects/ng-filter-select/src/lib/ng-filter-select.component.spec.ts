import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFilterSelectComponent } from './ng-filter-select.component';

describe('NgFilterSelectComponent', () => {
  let component: NgFilterSelectComponent;
  let fixture: ComponentFixture<NgFilterSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFilterSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFilterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
