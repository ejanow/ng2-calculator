import { Component, OnInit } from '@angular/core';

enum Operator {
  Plus,
  Minus,
  Divide,
  Times,
  Equals,
  Clear
}

class Calculator {

  public val: number;
  public old: number;
  public op: Operator;
  public isClean: boolean;

  clear(): void {
    this.val = 0;
    this.old = 0;
    this.op = Operator.Equals;
    this.isClean = true;
  }

  constructor () {
    this.clear();
  }

  processOp(op: Operator): void { 
    if (op === Operator.Clear) 
      return this.clear();

    switch( this.op ) {
      case Operator.Plus:  this.val += this.old; break;
      case Operator.Minus: this.val += this.old; break;
      case Operator.Times: this.val *= this.old; break;
      case Operator.Divide: this.val /= this.old; break;
      default: break;
    }
    this.isClean = true;
    this.op = op;
  }

  processNum(i: number){
    if (this.isClean) {
      this.old = this.val;
      this.val = i;
    }
    else {
      this.val = (this.val * 10) + i;
    }

    this.isClean = false;
  }

}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public calc: Calculator;
  public op = Operator;

  constructor() { 
    this.calc = new Calculator();
  }

  ngOnInit() {
  }

}
