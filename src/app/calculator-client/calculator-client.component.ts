import { Component, OnInit } from '@angular/core';
import {CalculatorRestService} from '../calculator-rest.service';

@Component({
  selector: 'app-calculator-client',
  templateUrl: './calculator-client.component.html',
  styleUrls: ['./calculator-client.component.css']
})
export class CalculatorClientComponent implements OnInit {

  num1:string;
  num2:string;

  response:any;

  constructor(private service:CalculatorRestService) { }

  ngOnInit(): void {
  }

  add() {
    this.response = this.service.add(this.num1, this.num2);
  }

  subtract() {
    this.response = this.service.subtract(this.num1, this.num2);
  }
  multiply() {
    this.response = this.service.multiply(this.num1, this.num2);
  }
  divide() {
    this.response = this.service.divide(this.num1, this.num2);
  }

}
