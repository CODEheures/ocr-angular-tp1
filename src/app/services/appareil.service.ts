import { Injectable } from '@angular/core';
import { Appareil } from '../interfaces/appareil';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  public appareilsSubject: Subject<Appareil[]>

  private appareils: Appareil[] = []

  constructor(private http: HttpClient) {
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

  putAppareilsToFirebase() {
    this.http.put('https://testbdd-658f3.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => { console.log ('données enregistrées')},
        (error) => { console.log('erreur d\'enregistrement' , error)}
      )
  }

  getAppareilsFromFirebase() {
    this.http.get<Appareil[]>('https://testbdd-658f3.firebaseio.com/appareils.json')
      .subscribe(
        (data) => {
          console.log('reception des données', data)
          this.appareils = data
          this.publishAppareils()
        },
        (error) => { console.log('erreur de récupération', error)}
      )
  }
}
