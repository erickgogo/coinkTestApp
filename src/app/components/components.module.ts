import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PadNumericComponent } from './pad-numeric/pad-numeric.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [StepperComponent,PadNumericComponent],
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[StepperComponent,PadNumericComponent]
})
export class ComponentsModule { }
