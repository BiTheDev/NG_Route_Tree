import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewauthorComponent } from './reviewauthor.component';

describe('ReviewauthorComponent', () => {
  let component: ReviewauthorComponent;
  let fixture: ComponentFixture<ReviewauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
