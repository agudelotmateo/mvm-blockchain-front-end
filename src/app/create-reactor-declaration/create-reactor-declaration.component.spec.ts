import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReactorDeclarationComponent } from './create-reactor-declaration.component';

describe('CreateReactorDeclarationComponent', () => {
  let component: CreateReactorDeclarationComponent;
  let fixture: ComponentFixture<CreateReactorDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReactorDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReactorDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
