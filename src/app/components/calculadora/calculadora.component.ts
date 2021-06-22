import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  result: string = '';
  longButtons: string[] = ['CLEAR','DEL'];
  buttons: string[] = ['7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];

  private prevValue: string = '';
  private curValue: string = '';

  addToExpression(value: string){
    if(this.result != ''){
      this.prevValue = this.curValue;
      this.curValue = value;
    }

    if(value == 'CLEAR'){
      this.result = '';
    } else if(value == 'DEL'){
      this.result = this.prevValue != "=" ? this.result.slice(0, -1) : this.result;
    } else if(value == '='){
      this.result = eval(this.result);
    } else{
      this.result += value;
    }
  }

}
