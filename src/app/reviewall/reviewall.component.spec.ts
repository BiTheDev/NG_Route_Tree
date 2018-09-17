import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewallComponent } from './reviewall.component';

describe('ReviewallComponent', () => {
  let component: ReviewallComponent;
  let fixture: ComponentFixture<ReviewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
