import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public firstNumber: number;
  public secondNumber: number;
  public result: number;

  /**
   * After addition is performed the result is emitted from library.
   * The functions listens to it and provides it to 'result' variable
   * Result is then displayed to user.
   * @param {any} event
   *
   */
  public additionFuncalled(event): void{
   this.result = event;
  }

  /**
   * After substraction is performed, the result is emiteed and the
   * fucntion assigns it to result variable which then displays it.
   * @param {any} event
   */
  public subsFuncalled(event): void{
    this.result = event;
  }
}
