import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionCardComponent } from './production-card.component';

describe('ProductionCardComponent', () => {
  let component: ProductionCardComponent;
  let fixture: ComponentFixture<ProductionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
