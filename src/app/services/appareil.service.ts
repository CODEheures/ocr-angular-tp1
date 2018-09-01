import { Injectable } from '@angular/core';
import { Appareil } from '../interfaces/appareil';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  public appareilsSubject: Subject<Appareil[]>

  private appareils: Appareil[] = [
    {'id': 1, 'name': 'télévision', 'state': 'éteint'},
    {'id': 2, 'name': 'machine à laver', 'state': 'éteint'},
    {'id': 3, 'name':  'ordinateur', 'state': 'allumé' }
  ]

  constructor() {
    this.appareilsSubject = new Subject
  }

  publishAppareils() {
    this.appareilsSubject.next(this.appareils.slice())
  }

  getById(id: number) {
    return this.appareils.find((item) => {
      return item.id === id
    })
  }

  switchAllOn() {
    this.appareils.forEach(appareil => {
      appareil.state = 'allumé'
    })
    this.publishAppareils()
  }

  switchAllOff() {
    this.appareils.forEach(appareil => {
      appareil.state = 'éteint'
    })
    this.publishAppareils()
  }

  switchOn(index: number) {
    this.appareils[index].state = 'allumé'
    this.publishAppareils()
  }

  switchOff(index: number) {
    this.appareils[index].state = 'éteint'
    this.publishAppareils()
  }

  addNew(name: string, state: string) {
    let id = 0
    this.appareils.forEach((appareil) => {
      if (appareil.id > id)  { id  = appareil.id}
    })
    id++
    this.appareils.push({
      id: id,
      name: name,
      state: state
    })
    this.publishAppareils()
  }

}
