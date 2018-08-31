import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isAuth: boolean

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuth
  }

  onConnect() {
    this.authService.connect().then(() => {
      this.isAuth = this.authService.isAuth
    })
  }

  onDisconnect() {
    this.authService.disconnect()
    this.isAuth = this.authService.isAuth
  }
}
