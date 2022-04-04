import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../interfaces/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userArray: {name: string, age: number}[] = [];
  @Output() addUser = new EventEmitter<IUser>();

  constructor() {
    console.log("I am in the constructor")
  //  debugger;

  }

  ngOnInit(): void {
    console.log("I am in the ngOnInit")
   // debugger;
  }

  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {

    const {value: name} = userNameInput;
    const {valueAsNumber: age} = userAgeInput;

    this.addUser.emit({name, age});

    userAgeInput.value = '';
    userNameInput.value = '';

  }

}
