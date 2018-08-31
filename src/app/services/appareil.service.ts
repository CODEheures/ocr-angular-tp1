import { Injectable } from '@angular/core';
import { Appareil } from '../interfaces/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  public appareils: Appareil[] = [
    {'id': 1, 'name': 'télévision', 'state': 'éteint'},
    {'id': 2, 'name': 'machine à laver', 'state': 'éteint'},
    {'id': 3, 'name':  'ordinateur', 'state': 'allumé' }
  ]

  constructor() { }

  getById(id: number) {
    return this.appareils.find((item) => {
      return item.id === id
    })
  }

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
