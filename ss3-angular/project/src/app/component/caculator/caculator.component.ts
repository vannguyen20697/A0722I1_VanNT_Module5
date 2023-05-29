import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  result: number = undefined;
  constructor() { }

  ngOnInit(): void {
  }
  sum(firstnumber: string, secondnumber: string) {
    this.result = +firstnumber + +secondnumber;
  }

  minus(firstnumber: string, secondnumber: string) {
    this.result = +firstnumber - +secondnumber;
  }

  multiply(firstnumber: string, secondnumber: string) {
    this.result = +firstnumber * +secondnumber;
  }

  division(firstnumber: string, secondnumber: string) {
    this.result = +firstnumber / +secondnumber;
  }
}
