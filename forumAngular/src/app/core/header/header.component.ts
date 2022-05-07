import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {

    this.userService.logout();
    this.router.navigate(['/']);

  }

}
