import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Games } from '../model/games.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: Games[]

  constructor(private http: HttpClient) { }

  baseUrl='http://localhost:3000/games';   //games Data Server
  baseUrl1='http://localhost:3001/user';  //User Data Server

  // baseUrl where json data is hosting so HttpClient is used to get that data

  // getGames and addUser method implementation in service Layer because we don't want user to directly access 
  // dataBase , to increase security but also increases code complexity
  getGames(){return this.http.get<Games[]>(this.baseUrl);}
 
  addUser(user: User){
    return this.http.post(this.baseUrl1, user);
  }
}
