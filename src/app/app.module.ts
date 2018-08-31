import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListAppareilsComponent } from './list-appareils/list-appareils.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Route } from '@angular/router';
import { DetailAppareilComponent } from './detail-appareil/detail-appareil.component';
import { P404Component } from './p404/p404.component';


const routes: Route[] = [
  { path: '', redirectTo: '/appareils', pathMatch: 'full'},
  { path: 'appareils', component: ListAppareilsComponent},
  { path: 'appareils/:id', component: DetailAppareilComponent},
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
    P404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
