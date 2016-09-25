/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';

describe('Component: Calculator', () => {
  it('should create an instance', () => {
    let component = new CalculatorComponent();
    expect(component).toBeTruthy();
  });

  it('Should be able to perform calculations', () => {
    let cc = new CalculatorComponent;
    let c = cc.calc;
    let op = cc.op;

    c.processNum(1);
    c.processNum(9);
    c.processOp(op.Plus);
    c.processNum(3);
    c.processNum(8);
    c.processOp(op.Equals);
    c.processOp(op.Minus);
    c.processNum(4);
    c.processNum(0);
    c.processOp(op.Equals);
    c.processOp(op.Times);
    c.processNum(4);
    c.processOp(op.Equals);
    c.processOp(op.Divide);
    c.processNum(2);
    c.processOp(op.Equals);

    let result = c.val;

    expect(result).toEqual()




  });
});
