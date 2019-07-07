import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {RandomKittensComponent} from '../app/random-kittens/random-kittens.component';
import { HomeComponent } from './home/home.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { EtcComponent } from './etc/etc.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'random-kittens', component: RandomKittensComponent },
  { path: 'commissions', component: CommissionsComponent },
  { path: 'etc', component: EtcComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
