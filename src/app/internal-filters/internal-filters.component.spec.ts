import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFiltersComponent } from './internal-filters.component';

describe('InternalFiltersComponent', () => {
  let component: InternalFiltersComponent;
  let fixture: ComponentFixture<InternalFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
