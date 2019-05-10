import { GamesService } from './../service/games.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-city',
  templateUrl: './game-city.component.html',
  styleUrls: ['./game-city.component.css']
})
export class GameCityComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private serve: GamesService, private router: Router ) { }

  addForm: FormGroup;

  ngOnInit() {

    //Validations for form entry
    
    this.addForm = this.formBuilder.group({
      Name: ['', Validators.required,  Validators.maxLength(15)],
      Address: ['', [Validators.required, Validators.maxLength(15)]],
      AmountToPay: ['', [Validators.required, Validators.maxLength(5)]]
    });
  }

  // BuyCard() {
  //   console.log('User details sent to server');
  //   this.serve.addUser(this.addForm.value)
  //     .subscribe(data => {
  //       console.log("Data Saved!");

        

       
  //     },
  //       error => {
  //         console.log("Error occured " + error);
  //     });
  // }

  BuyCard(){
    this.router.navigate(['/add']);
  }

  //After clicking BuyCard Button it will navigate to PlayComponent

}






