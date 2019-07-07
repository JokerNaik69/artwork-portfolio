import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RandomKittensComponent } from './random-kittens/random-kittens.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { EtcComponent } from './etc/etc.component';
import { RandomKittenService } from './random-kitten.service';
import { HttpClientModule } from '@angular/common/http';
import { CommissionsService } from './commissions.service';
import { EtcService } from './etc.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavigationComponent,
    RandomKittensComponent,
    CommissionsComponent,
    EtcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
