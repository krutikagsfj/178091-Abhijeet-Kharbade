import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PlayComponent } from './play/play.component';
import { GameCityComponent } from './game-city/game-city.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  
    PlayComponent,
  
    GameCityComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
