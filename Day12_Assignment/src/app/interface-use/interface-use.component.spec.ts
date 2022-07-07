import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUseComponent } from './interface-use.component';

describe('InterfaceUseComponent', () => {
  let component: InterfaceUseComponent;
  let fixture: ComponentFixture<InterfaceUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
