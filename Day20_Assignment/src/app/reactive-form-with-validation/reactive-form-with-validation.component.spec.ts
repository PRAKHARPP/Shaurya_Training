import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithValidationComponent } from './reactive-form-with-validation.component';

describe('ReactiveFormWithValidationComponent', () => {
  let component: ReactiveFormWithValidationComponent;
  let fixture: ComponentFixture<ReactiveFormWithValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormWithValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormWithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
