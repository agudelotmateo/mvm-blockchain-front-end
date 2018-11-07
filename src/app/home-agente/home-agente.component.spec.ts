import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAgenteComponent } from './home-agente.component';

describe('HomeAgenteComponent', () => {
  let component: HomeAgenteComponent;
  let fixture: ComponentFixture<HomeAgenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAgenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
