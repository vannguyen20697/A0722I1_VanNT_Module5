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
  sum(firstnumber: string, secondnumber: string){
    this.result = +firstnumber + +secondnumber;
  }
}
