import { Component, OnInit, OnDestroy } from '@angular/core';
import { Appareil } from '../interfaces/appareil';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-appareils',
  templateUrl: './list-appareils.component.html',
  styleUrls: ['./list-appareils.component.scss']
})
export class ListAppareilsComponent implements OnInit, OnDestroy {

  public appareils: Appareil[]
  public appareilsSubscription: Subscription

  public isAuth = false
  public lastUpdate = new Promise((resolve, reject) => {
    const date = new Date()
    setTimeout(() => {
      return resolve(date)
    }, 3000)
  })

  constructor(private appareilService: AppareilService, private authService: AuthService) {

  }

  ngOnInit() {
    this.appareilsSubscription = this.appareilService.appareilsSubject.subscribe((appareils) => {
      this.appareils = appareils
    })
    this.appareilService.publishAppareils()
    this.isAuth = this.authService.isAuth
  }

  ngOnDestroy() {
    this.appareilsSubscription.unsubscribe()
  }

  onAllumer() {
    this.appareilService.switchAllOn()
  }

  onEteindre() {
    this.appareilService.switchAllOff()
  }

}
