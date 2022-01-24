import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() steps: any
  @Input() stepControler: number
  constructor() { }

  ngOnInit() {
    this.steps  = Array(this.steps).fill(null).map((x,i)=>i);
  }

}
