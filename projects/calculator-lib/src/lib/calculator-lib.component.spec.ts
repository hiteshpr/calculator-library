import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorLibComponent } from './calculator-lib.component';

describe('CalculatorLibComponent', () => {
  let component: CalculatorLibComponent;
  let fixture: ComponentFixture<CalculatorLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
