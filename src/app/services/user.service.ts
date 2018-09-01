import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      firstName: 'Jean',
      lastName: 'Paul',
      email: 'jean@paul.fr',
      preferredDrink: 'Coca',
      hobbies: [
        'Manger',
        'Dormir',
        'Coder'
      ]
    }
  ]
  public userSubject: Subject<User[]>

  constructor() {
    this.userSubject = new Subject
  }

  publishUsers() {
    this.userSubject.next(this.users.slice())
  }

  addUser(user: User) {
    this.users.push(user)
  }
}
