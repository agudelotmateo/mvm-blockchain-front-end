import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCondenserDeclarationsComponent } from './view-condenser-declarations.component';

describe('ViewCondenserDeclarationsComponent', () => {
  let component: ViewCondenserDeclarationsComponent;
  let fixture: ComponentFixture<ViewCondenserDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCondenserDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCondenserDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
