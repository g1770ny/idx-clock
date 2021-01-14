import { NgModule } from '@angular/core';
import { IdxClockComponent } from './idx-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { BehindCountComponent } from './behind-count/behind-count.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [IdxClockComponent, DigitalClockComponent, StopwatchComponent, BehindCountComponent],
  imports: [
    CommonModule
  ],
  exports: [IdxClockComponent]
})
export class IdxClockModule { }
