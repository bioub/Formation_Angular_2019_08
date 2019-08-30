import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './clock/clock.component';



@NgModule({
  declarations: [
    ClockComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,

    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
