import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavXmComponent } from './sidenav-xm.component';

describe('SidenavXmComponent', () => {
  let component: SidenavXmComponent;
  let fixture: ComponentFixture<SidenavXmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavXmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavXmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
