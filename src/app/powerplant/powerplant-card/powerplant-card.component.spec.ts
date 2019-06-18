import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerplantCardComponent } from './powerplant-card.component';

describe('PowerplantCardComponent', () => {
  let component: PowerplantCardComponent;
  let fixture: ComponentFixture<PowerplantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerplantCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerplantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
