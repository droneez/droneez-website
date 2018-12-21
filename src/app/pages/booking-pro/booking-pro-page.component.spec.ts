import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingProPageComponent } from './booking-pro-page.component';

describe('BookingProPageComponent', () => {
  let component: BookingProPageComponent;
  let fixture: ComponentFixture<BookingProPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingProPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingProPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
