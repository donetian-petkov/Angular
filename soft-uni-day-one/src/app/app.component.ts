import { Component } from '@angular/core';
import {IUser} from "./interfaces/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'soft-uni-day-one';

  users = [
    {
      name: 'Ivan',
      age: 20
    },
    {
      name: 'Naiden',
      age: 30
    },
    {
      name: 'Ivana',
      age: 50
    }
  ]

  addNewUserHandler(newUser: IUser){
    this.users.push(newUser);
  }

}
