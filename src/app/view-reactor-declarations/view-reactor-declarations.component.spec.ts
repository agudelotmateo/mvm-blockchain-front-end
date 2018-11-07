import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReactorDeclarationsComponent } from './view-reactor-declarations.component';

describe('ViewReactorDeclarationsComponent', () => {
  let component: ViewReactorDeclarationsComponent;
  let fixture: ComponentFixture<ViewReactorDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReactorDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReactorDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
