import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegulatorComponent } from './create-regulator.component';

describe('CreateRegulatorComponent', () => {
  let component: CreateRegulatorComponent;
  let fixture: ComponentFixture<CreateRegulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRegulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
