import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListAppareilsComponent } from './list-appareils/list-appareils.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Route } from '@angular/router';
import { DetailAppareilComponent } from './detail-appareil/detail-appareil.component';
import { P404Component } from './p404/p404.component';
import { AuthGuarg } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Route[] = [
  { path: '', redirectTo: '/appareils', pathMatch: 'full'},
  { path: 'appareils', canActivate: [AuthGuarg], component: ListAppareilsComponent},
  { path: 'appareils/edit', canActivate: [AuthGuarg], component: EditAppareilComponent},
  { path: 'appareils/:id', canActivate: [AuthGuarg], component: DetailAppareilComponent},
  { path: 'users', component: ListUsersComponent},
  { path: 'users/add', component: EditUserComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'not-found', component: P404Component},
  { path: '**', redirectTo: '/not-found'}
]
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ListAppareilsComponent,
    AuthComponent,
    DetailAppareilComponent,
    P404Component,
    EditAppareilComponent,
    ListUsersComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
