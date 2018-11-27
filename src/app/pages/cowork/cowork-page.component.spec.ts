import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkPageComponent } from './cowork-page.component';

describe('CoworkPageComponent', () => {
  let component: CoworkPageComponent;
  let fixture: ComponentFixture<CoworkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
