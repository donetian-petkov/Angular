import { Component, OnInit } from '@angular/core';
import {faEnvelope, faLock, faPhone, faUser} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {emailValidator, sameValueAsFactory} from "../../shared/validators";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  icons = {
    faUser,
    faEnvelope,
    faPhone,
    faLock
  }

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {

    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator]],
      tel: [''],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rePassword: ['', sameValueAsFactory( () => this.form?.get('password')!)]
    })

  }

  ngOnInit(): void {
  }

  register(form: FormGroup): void {

    if (this.form.invalid) {
      return;
    }

    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      }
    }
  )



  }

}
