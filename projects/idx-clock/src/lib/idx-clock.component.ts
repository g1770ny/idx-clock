import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'idx-clock',
  template: `
    <div class="lib-container">
      <button (click)="showingView = 'digital-clock'" class="button-menu init-btn-focus" 
              [ngStyle]="{'background': (showingView == 'digital-clock' ? '#ccc' : '')}">
        Reloj
      </button>
      <button (click)="showingView = 'stopwatch'" class="button-menu"
              [ngStyle]="{'background': (showingView == 'stopwatch' ? '#ccc' : '')}">
        Cronómetro
      </button>
      <button (click)="showingView = 'behind-count'" class="button-menu"
              [ngStyle]="{'background': (showingView == 'behind-count' ? '#ccc' : '')}">
        Cuenta atrás
      </button>
    </div>
    <digital-clock  *ngIf="showingView == 'digital-clock'" 
                    [meridies]="meridies"
                    (changeTime)="onChangeTime($event)">
    </digital-clock>
    <stopwatch *ngIf="showingView == 'stopwatch'"
                (changeTime)="onChangeTime($event)">
    </stopwatch>
    <behind-count *ngIf="showingView == 'behind-count'"
                  (changeTime)="onChangeTime($event)">
    </behind-count>
  `,
  styleUrls: ['./idx-clock.component.css']
})
export class IdxClockComponent implements OnInit {

  meridies = true;
  showingView = 'digital-clock';

  @Output() changeTime = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTime(currTime):void {
    this.changeTime.emit(currTime);
  }

}
