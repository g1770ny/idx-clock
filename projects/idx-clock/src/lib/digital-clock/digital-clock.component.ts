import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  today: Date = new Date();

  @Input() meridies: boolean = false;

  @Output() changeTime = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {

      delete this.today;
      this.today = new Date();
      this.changeTime.emit(`${this.hours}:${this.minutes}:${this.seconds}${this.am_pm}`);

    }, 1000);

  }

  public printItemClock(item: number):string {
    return String(item < 10 ? '0' + item : item)
  }

  get am_pm():string{
    const hour = this.today.getHours();

    if(this.meridies){
      return hour < 12 ? ' AM' : ' PM';
    }

    return '';
  }

  get hours():string {
    const hour = this.today.getHours();
    return this.printItemClock((this.meridies && hour > 12) ? hour - 12 : hour);
  }

  get minutes():string {
    return this.printItemClock(this.today.getMinutes());
  }

  get seconds():string {
    return this.printItemClock(this.today.getSeconds());
  }
}
