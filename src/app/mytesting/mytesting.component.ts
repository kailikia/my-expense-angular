import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytesting',
  templateUrl: './mytesting.component.html',
  styleUrls: ['./mytesting.component.css']
})
export class MytestingComponent implements OnInit {

  test_value: Number = 10;

  sayMessage() {
    this.test_value = 100;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
