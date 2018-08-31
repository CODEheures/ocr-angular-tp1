import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth = false

  constructor() { }

  connect() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('vous êtes connecté')
        this.isAuth = true
        resolve(true)
      }, 2000)
    })
  }

  disconnect() {
    console.log('vous êtes déconnecté')
    this.isAuth = false
  }
}
