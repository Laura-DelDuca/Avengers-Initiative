import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';
import { Page404Component } from './page404/page404.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroes/:id', component: HeroDetailsComponent},
  {path: 'messages', component: MessagesComponent },
  {path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
