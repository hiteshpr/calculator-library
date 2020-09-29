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

  public additionFuncalled(event): void{
   this.result = event;
  }

  public subsFuncalled(event): void{
    this.result = event;
  }
}
