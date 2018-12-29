import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() initialValue = 0;

  title = 'Counter App';

  constructor() {}

  ngOnInit(): void {}

  increment() {
    ++this.initialValue;
  }

  decrement() {
    --this.initialValue;
  }
}
