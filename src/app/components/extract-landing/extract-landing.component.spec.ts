import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractLandingComponent } from './extract-landing.component';

describe('ExtractLandingComponent', () => {
  let component: ExtractLandingComponent;
  let fixture: ComponentFixture<ExtractLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
