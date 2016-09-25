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
    if (op === Operator.Clear) {
      return this.clear();
    }

    switch( this.op ) {
      case Operator.Plus:  this.val += this.old; break;
      case Operator.Minus: this.val += this.old; break;
      case Operator.Times: this.val *= this.old; break;
      case Operator.Divide: this.val = this.old / this.val; break;
      default: break;
    }
    this.isClean = true;
    this.op = op;
  }

  processNum(num: number): void {
    if (this.isClean) {
      this.old = this.val;
      this.val = num;
    }
    else {
      this.val = (this.val * 10) + num;
    }

    this.isClean = false;
  }

  keyboardEventHandler(event: KeyboardEvent): void {
    switch( event.keyCode ) {
        case 96:  
        case 48: this.processNum(0); break;
        case 97:
        case 49: this.processNum(1); break;
        case 98: 
        case 50: this.processNum(2); break;
        case 99: 
        case 51: this.processNum(3); break;
        case 100: 
        case 52: this.processNum(4); break;
        case 101:
        case 53: this.processNum(5); break;
        case 102:
        case 54: this.processNum(6); break;
        case 103:
        case 55: this.processNum(7); break;
        case 104:
        case 56: this.processNum(8); break;
        case 105:
        case 57: this.processNum(9); break;
        case 189:
        case 109: this.processOp(Operator.Minus); break;
        case 27:
        case 8: this.processOp(Operator.Clear); break;
        case 106: this.processOp(Operator.Times); break;
        case 107: this.processOp(Operator.Plus); break;
        case 13: this.processOp(Operator.Equals); break;

        default: break;
    }
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
    let self = this;
    setTimeout( () => {
      document.addEventListener('keydown', (event) => { 
        self.calc.keyboardEventHandler(event)
        });
    }, 0);

  }

}
