import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutArticleComponent } from './layout-article.component';

describe('LayoutArticleComponent', () => {
  let component: LayoutArticleComponent;
  let fixture: ComponentFixture<LayoutArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
