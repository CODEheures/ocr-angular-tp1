import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListAppareilsComponent } from './list-appareils/list-appareils.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Route } from '@angular/router';
import { DetailAppareilComponent } from './detail-appareil/detail-appareil.component';


const routes: Route[] = [
  { path: '', redirectTo: '/appareils', pathMatch: 'full'},
  { path: 'appareils', component: ListAppareilsComponent},
  { path: 'appareils/:id', component: DetailAppareilComponent},
  { path: 'auth', component: AuthComponent},
  { path: '**', redirectTo: 'appareils'}
]
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ListAppareilsComponent,
    AuthComponent,
    DetailAppareilComponent
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
