import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegulatorsComponent } from './view-regulators.component';

describe('ViewRegulatorsComponent', () => {
  let component: ViewRegulatorsComponent;
  let fixture: ComponentFixture<ViewRegulatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegulatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegulatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
