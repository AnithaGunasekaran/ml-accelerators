import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainLandingComponent } from './train-landing.component';

describe('TrainLandingComponent', () => {
  let component: TrainLandingComponent;
  let fixture: ComponentFixture<TrainLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
