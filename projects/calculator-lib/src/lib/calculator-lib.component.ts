import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-calculator-lib',
  templateUrl: './calculator-lib.component.html',
  styles: [ ]
})
export class CalculatorLibComponent {

  @Input()
  public integerOne: number;

  @Input()
  public integerTwo: number;

  @Output()
  public additionEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public substractionEvent: EventEmitter<number> = new EventEmitter<number>();

  public result: number;

  public additionFun(): void {

    this.result =  Number(this.integerOne) + Number(this.integerTwo);
    console.log('result', this.result, typeof(this.result));
    this.additionEvent.emit(this.result);
  }

  public substractFun(): void {
    this.result = Number(this.integerOne) - Number(this.integerTwo);
    console.log('subresult', this.result);
    this.substractionEvent.emit(this.result);
  } 

}
