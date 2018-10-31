import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCondenserDeclarationComponent } from './create-condenser-declaration.component';

describe('CreateCondenserDeclarationComponent', () => {
  let component: CreateCondenserDeclarationComponent;
  let fixture: ComponentFixture<CreateCondenserDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCondenserDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCondenserDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
