import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isAuth: boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuth
  }

  onConnect() {
    this.authService.connect().then(() => {
      this.isAuth = this.authService.isAuth
      this.router.navigate(['/appareils'])
    })
  }

  onDisconnect() {
    this.authService.disconnect()
    this.isAuth = this.authService.isAuth
  }
}
