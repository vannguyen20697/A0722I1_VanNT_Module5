import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color1 = 'red';
  name = 'hello';
  constructor() { }

  ngOnInit(): void {
  }

}
