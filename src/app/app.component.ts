import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currTime: string;

  onChangeTime(currTime){
    this.currTime = currTime;
  }
}
