import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count++;
  }

}
