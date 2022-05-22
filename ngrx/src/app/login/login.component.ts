import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tesingEmail = 'test@abv.bg';

  constructor() { }

  ngOnInit(): void {
  }

  loginHandler(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    console.log(form);

  }

}
