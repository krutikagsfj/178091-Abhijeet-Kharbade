import { GamesService } from '../service/games.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Games } from '../model/games.model';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  games: Games[]
  balance: number = 600;
  

  constructor(private http: HttpClient , private serve: GamesService) { }

  ngOnInit() {
    this.serve.getGames().subscribe((data: Games[]) => {  this.games = data;  });
    console.log(this.games);
  }


}
