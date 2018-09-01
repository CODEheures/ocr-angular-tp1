import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public time: number
  private timerSubscription: Subscription

  constructor() {}

  ngOnInit() {
    const timer = interval(1000)
    this.timerSubscription = timer.subscribe((value) => {
      this.time = value
    })
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe()
  }
}
