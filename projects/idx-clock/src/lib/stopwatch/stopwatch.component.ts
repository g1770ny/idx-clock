import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  miliseconds: number = 0;

  intervalHandler = null;
  status: string = 'initial';

  @Output() changeTime = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.changeTime.emit(`${this.hours}:${this.minutes}:${this.seconds}.${this.miliseconds}`);
    }, 0);
  }

  initInterval():void {
    this.intervalHandler = setInterval(() => {

      if(this.miliseconds == 99){
        this.miliseconds = 0;

        if(this.seconds == 59){
          this.seconds = 0;
  
          if(this.minutes == 59){

            this.minutes = 0;
            this.hours = this.hours == 23 ? 0 : this.hours + 1;  

          }
          else{
            this.minutes++;
          }
        }
        else{
          this.seconds++;
        }
      }
      else{
        this.miliseconds++;
      }

      this.changeTime.emit(`${this.hours}:${this.minutes}:${this.seconds}.${this.miliseconds}`);
      
    }, 10);
  }

  get str_hours():string {
    return this.printItem(this.hours);
  }

  get str_minutes():string {
    return this.printItem(this.minutes);
  }

  get str_seconds():string {
    return this.printItem(this.seconds);
  }

  get str_miliseconds():string {
    return this.printItem(this.miliseconds);
  }

  public printItem(item: number):string {
    return String(item < 10 ? '0' + item : item)
  }

  startStopwatch():void {
    this.status = 'started';
    this.initInterval();
  }

  stopStopwatch():void {
    this.status = 'stoped';
    clearInterval(this.intervalHandler);
  }

  restartStopwatch():void {
    this.status = 'initial';
    this.hours = this.minutes = this.seconds = this.miliseconds = 0;
    this.changeTime.emit(`${this.hours}:${this.minutes}:${this.seconds}.${this.miliseconds}`);
  }
}
