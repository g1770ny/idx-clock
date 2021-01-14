import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'behind-count',
  templateUrl: './behind-count.component.html',
  styleUrls: ['./behind-count.component.css']
})
export class BehindCountComponent implements OnInit {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  intervalHandler = null;
  status: string = 'initial';

  @Output() changeTime = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { 
    setTimeout(() => {
      this.changeTime.emit(`${this.hours}:${this.minutes}:${this.seconds}`);
    }, 0);
  }

  initInterval(){
    this.intervalHandler = setInterval(() => {

      if(this.seconds == 0){
        this.seconds = (this.minutes > 0 || this.hours > 0) ? 59 : 0;

        if(this.minutes == 0){

          this.minutes = (this.hours > 0) ? 59 : 0;
          this.hours = this.hours > 0 ? this.hours - 1 : 0;  

        }
        else{
          this.minutes--
        }
      }
      else{
        this.seconds--
      }
       
      this.changeTime.emit(`${this.hours}:${this.minutes}:${this.seconds}`);

    }, 1000);
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

  get finished(): boolean {
    return this.status == 'started' && this.hours == 0 && this.minutes == 0 && this.seconds == 0;
  }

  public printItem(item: number): string {
    return String(item < 10 ? '0' + item : item)
  }

  startBehindcount():void {
    this.status = 'started';
    this.initInterval();
  }

  stopBehindcount():void {
    this.status = 'stoped';
    clearInterval(this.intervalHandler);
  }

  restartBehindcount():void {
    this.status = 'initial';
    this.hours = this.minutes = this.seconds = 0;
    this.changeTime.emit(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  handleUnit(unitType: string, operation: string): void{
    operation == '+' ? this[unitType]++ : (this[unitType] > 0 ? this[unitType]-- : 0);
  }
}
