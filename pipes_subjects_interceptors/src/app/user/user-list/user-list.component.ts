import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { UserService } from 'src/app/user.service';
import {IUser} from "../../interfaces/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  @Input() userArray: IUser[] = [];

  users$ = this.userService.users$;

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    this.loadUsers();

  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        map((e) => (e.target as HTMLInputElement).value),
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe((value) => this.loadUsers(value));
  }

  loadUsers = this.userService.loadUsers;

  searchButtonHandler(searchInput: HTMLInputElement) {

    const { value } = searchInput;

    this.loadUsers(value);
  }

}
