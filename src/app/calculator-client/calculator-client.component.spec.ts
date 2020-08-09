import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorClientComponent } from './calculator-client.component';

describe('CalculatorClientComponent', () => {
  let component: CalculatorClientComponent;
  let fixture: ComponentFixture<CalculatorClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
