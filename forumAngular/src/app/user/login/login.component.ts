import { Component, OnInit } from '@angular/core';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  icons = {
    faEnvelope: faEnvelope,
    faLock: faLock
  }

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(email: string, password: string): void {
    this.userService.login(email, password);
    const redirectUrl = this.activatedRoute.snapshot.queryParams['redirectUrl'] || '/';
    this.router.navigate([redirectUrl]);
  }

}
