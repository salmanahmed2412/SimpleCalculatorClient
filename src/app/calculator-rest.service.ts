import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CalculatorRestService {

  url:string="http://localhost:8080";
  response:any;

  constructor(private http:HttpClient) {
  }

  add(num1:string, num2:string):string{
    this.http.get(this.url+'/add?num1='+num1+'&num2='+num2)
      .subscribe((response) => {
        this.response = response;
      });
    return this.response;
  }

  subtract(num1:string, num2:string):string{
    this.http.get(this.url+'/subtract?num1='+num1+'&num2='+num2)
      .subscribe((response) => {
        this.response = response;
      });
    return this.response;
  }

  multiply(num1:string, num2:string):string{
    this.http.get(this.url+'/multiply?num1='+num1+'&num2='+num2)
      .subscribe((response) => {
        this.response = response;
      });
    return this.response;
  }

  divide(num1:string, num2:string):string{
    this.http.get(this.url+'/divide?num1='+num1+'&num2='+num2)
      .subscribe((response) => {
        this.response = response;
      });
    return this.response;
  }


}
