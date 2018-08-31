import { Injectable } from '@angular/core';
import { Appareil } from '../interfaces/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  public appareils: Appareil[] = [
    {'name': 'télévision', 'state': 'éteint'},
    {'name': 'machine à laver', 'state': 'éteint'},
    {'name':  'ordinateur', 'state': 'allumé' }
  ]

  constructor() { }

  switchAllOn() {
    this.appareils.forEach(appareil => {
      appareil.state = 'allumé'
    })
  }

  switchAllOff() {
    this.appareils.forEach(appareil => {
      appareil.state = 'éteint'
    })
  }

  switchOn(index: number) {
    this.appareils[index].state = 'allumé'
  }

  switchOff(index: number) {
    this.appareils[index].state = 'éteint'
  }

}
