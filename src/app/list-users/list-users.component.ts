import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, OnDestroy {

  public users: User[]
  private userSubscription: Subscription

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe((users) => {
      this.users = users
    })
    this.userService.publishUsers()
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe()
  }
}
