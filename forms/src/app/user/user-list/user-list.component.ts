import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserService } from 'src/app/user.service';
import {IUser} from "../../interfaces/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
/*
  changeDetection: ChangeDetectionStrategy.OnPush
*/
})
export class UserListComponent implements OnInit {

 /* @Input() userArray: {name: string, age: number}[] = [];
  @Output() addUser = new EventEmitter<IUser>();*/

  /*constructor() {
    console.log("I am in the constructor")
  //  debugger;

  }*/

 /* ngOnInit(): void {
    console.log("I am in the ngOnInit")
   // debugger;
  }
*/
  @Input() userArray: IUser[] = [];

  /*addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {

    const {value: name} = userNameInput;
    const {valueAsNumber: age} = userAgeInput;

    this.addUser.emit({name, age});

    userAgeInput.value = '';
    userNameInput.value = '';

  }*/

  users: IUser[] | undefined;

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    this.loadUsers();

  }

  loadUsers(searchInput?: string) {
    this.users = undefined;
    this.userService.loadUsers(searchInput).subscribe(users => this.users = users);
  }

  searchButtonHandler(searchInput: HTMLInputElement) {

    const { value } = searchInput;

    this.loadUsers(value);
  }

  reloadButtonHandler() {
    this.loadUsers();
  }

}
