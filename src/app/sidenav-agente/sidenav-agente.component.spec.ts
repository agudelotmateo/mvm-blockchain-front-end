import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAgenteComponent } from './sidenav-agente.component';

describe('SidenavAgenteComponent', () => {
  let component: SidenavAgenteComponent;
  let fixture: ComponentFixture<SidenavAgenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavAgenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
