import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegulatorComponent } from './home-regulator.component';

describe('HomeRegulatorComponent', () => {
  let component: HomeRegulatorComponent;
  let fixture: ComponentFixture<HomeRegulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
