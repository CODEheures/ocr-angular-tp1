import { Component } from '@angular/core';
import { Appareil } from './interfaces/appareil';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appareils: Appareil[]

  public isAuth = false
  public lastUpdate = new Promise((resolve, reject) => {
    const date = new Date()
    setTimeout(() => {
      return resolve(date)
    }, 3000)
  })

  constructor(private appareilService: AppareilService) {
    this.appareils = appareilService.appareils
    setTimeout(() => {
      this.isAuth = true
    }, 4000)
  }

  onAllumer() {
    this.appareilService.switchAllOn()
  }

  onEteindre() {
    this.appareilService.switchAllOff()
  }
}
