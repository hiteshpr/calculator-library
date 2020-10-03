import {
  Component,
  EventEmitter,
  Input,
  Output } from '@angular/core';

  /**
   * CalculatorLibComponent - does simple mathematical calculations
   *
   * This component takes input numbers from user, performs addition and substraction on it
   * and return result.
   *
   * How to use :-
   *
   * 1. Import the library into project.
   * 2. integrate the compoennt as shown -
   *
   * <my-calculator-lib [integerOne]="firstNumber" [integerTwo]="secondNumber"
   *        (additionEvent)="additionFuncalled($event)"
   *        (substractionEvent)="subsFuncalled($event)">
   * </my-calculator-lib>
   *
   */
@Component({
  selector: 'my-calculator-lib',
  templateUrl: './calculator-lib.component.html',
  styles: [ ]
})
export class CalculatorLibComponent {

  // take first number input as 'integerOne'
  @Input()
  public integerOne: number;

  // take second number input as 'integerTwo'
  @Input()
  public integerTwo: number;

  // when addition button is clicked this event is triggered
  @Output()
  public additionEvent: EventEmitter<number> = new EventEmitter<number>();

  // when substraction button is clicked this event is triggered
  @Output()
  public substractionEvent: EventEmitter<number> = new EventEmitter<number>();

  // when multiplication button is clicked this event is triggered
  @Output()
  public multiplicationEvent: EventEmitter<number> = new EventEmitter<number>();

  // when division button is clicked this event is triggered
  @Output()
  public divisionEvent: EventEmitter<number> = new EventEmitter<number>();

  // store result
  public result: number;

  /**
   * emits result after performing
   * addition between the numbers provided
   *
   */
  public additionFun(): void {

    this.result =  Number(this.integerOne) + Number(this.integerTwo);
    this.additionEvent.emit(this.result);
  }

  /**
   * emits result after performing
   * substraion between the numbers
   */
  public substractFun(): void {
    this.result = Number(this.integerOne) - Number(this.integerTwo);
    this.substractionEvent.emit(this.result);
  }

  /**
   * emits result after performing
   * multiplication between the numbers
   */
  public multiplicationFun(): void {
    this.result = Number(this.integerOne) * Number(this.integerTwo);
    this.multiplicationEvent.emit(this.result);
  }

  /**
   * emits result after performing
   * division between the numbers
   */
  public divisionFun(): void {
    this.result = (Number(this.integerOne)) / (Number(this.integerTwo));
    this.divisionEvent.emit(this.result);
  }

}
