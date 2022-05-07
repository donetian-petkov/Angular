import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {faSignInAlt, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  icons = {
    faSignInAlt,
    faUserPlus
  }

  constructor(private userService: UserService, private router: Router) { }

  get isLogged() {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
  }

}
