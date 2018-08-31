import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appareils = [
    {'name': 'télévision', 'state': 'eteint'},
    {'name': 'machine à laver', 'state': 'eteint'},
    {'name':  'ordinateur', 'state': 'allumé' }
  ]

  public isAuth = false
  public lastUpdate = new Promise((resolve, reject) => {
    const date = new Date()
    setTimeout(() => {
      return resolve(date)
    }, 3000)
  })

  constructor() {
    setTimeout(() => {
      this.isAuth = true
    }, 4000)
  }

  onAllumer() {
    console.log('On allume tout!')
  }
}
