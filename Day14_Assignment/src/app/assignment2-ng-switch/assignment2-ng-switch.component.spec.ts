import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment2NgSwitchComponent } from './assignment2-ng-switch.component';

describe('Assignment2NgSwitchComponent', () => {
  let component: Assignment2NgSwitchComponent;
  let fixture: ComponentFixture<Assignment2NgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment2NgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment2NgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
