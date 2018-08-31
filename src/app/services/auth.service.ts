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
        this.isAuth = true
        resolve(true)
      }, 2000)
    })
  }

  disconnect() {
    this.isAuth = false
  }
}
