import { CdkStepperModule } from '@angular/cdk/stepper';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pad-numeric',
  templateUrl: './pad-numeric.component.html',
  styleUrls: ['./pad-numeric.component.scss'],
})
export class PadNumericComponent implements OnInit {
  @Input() input: String
  @Output() changes: EventEmitter<any> = new EventEmitter()
  @Output() complete: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {}
  setValue(value){
    
    if(value==null){
      this.input= String(this.input).substring(0,this.input.length-1)
    }else{
      this.input=this.input+value
    }    
     this.changes.emit(this.input)
    }
    onComplete(){
    this.complete.emit()

  }

}
