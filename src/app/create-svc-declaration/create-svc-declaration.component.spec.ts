import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSvcDeclarationComponent } from './create-svc-declaration.component';

describe('CreateSvcDeclarationComponent', () => {
  let component: CreateSvcDeclarationComponent;
  let fixture: ComponentFixture<CreateSvcDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSvcDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSvcDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
