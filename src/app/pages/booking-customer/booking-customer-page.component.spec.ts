import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCustomerPageComponent } from './booking-customer-page.component';

describe('BookingCustomerPageComponent', () => {
  let component: BookingCustomerPageComponent;
  let fixture: ComponentFixture<BookingCustomerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCustomerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
