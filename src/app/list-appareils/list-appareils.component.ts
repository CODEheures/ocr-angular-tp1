import { Component, OnInit } from '@angular/core';
import { Appareil } from '../interfaces/appareil';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-list-appareils',
  templateUrl: './list-appareils.component.html',
  styleUrls: ['./list-appareils.component.scss']
})
export class ListAppareilsComponent implements OnInit {

  public appareils: Appareil[]

  public isAuth = false
  public lastUpdate = new Promise((resolve, reject) => {
    const date = new Date()
    setTimeout(() => {
      return resolve(date)
    }, 3000)
  })

  constructor(private appareilService: AppareilService, private authService: AuthService) {
    this.appareils = appareilService.appareils
    this.isAuth = authService.isAuth
  }

  ngOnInit() {
  }

  onAllumer() {
    this.appareilService.switchAllOn()
  }

  onEteindre() {
    this.appareilService.switchAllOff()
  }

}
