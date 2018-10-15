import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooploopPageComponent } from './wooploop-page.component';

describe('WooploopPageComponent', () => {
  let component: WooploopPageComponent;
  let fixture: ComponentFixture<WooploopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooploopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooploopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
