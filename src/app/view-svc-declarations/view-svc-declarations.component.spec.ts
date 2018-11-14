import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSvcDeclarationsComponent } from './view-svc-declarations.component';

describe('ViewSvcDeclarationsComponent', () => {
  let component: ViewSvcDeclarationsComponent;
  let fixture: ComponentFixture<ViewSvcDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSvcDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSvcDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
