import { GameCityComponent } from './game-city/game-city.component';
import { PlayComponent } from './play/play.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component:  GameCityComponent },  
  // if nothing after url is given than it will show GameCityComponent

  { path: 'add', component: PlayComponent}
   // if url/add is given than it will show PlayComponent

];



@NgModule({
    imports: [
      CommonModule, RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })
  export class AppRoutingModule { }



