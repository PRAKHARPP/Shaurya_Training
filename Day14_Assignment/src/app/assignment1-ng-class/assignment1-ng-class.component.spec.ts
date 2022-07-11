import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment1NgClassComponent } from './assignment1-ng-class.component';

describe('Assignment1NgClassComponent', () => {
  let component: Assignment1NgClassComponent;
  let fixture: ComponentFixture<Assignment1NgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment1NgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment1NgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
