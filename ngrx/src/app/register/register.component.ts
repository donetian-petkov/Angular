import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { sameValueValidateFactory } from '../same-value-validate-fn';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy{

  form: FormGroup;

  subscription: Subscription;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['']
    });


    const sameValueValidate = sameValueValidateFactory('repeatPassword', this.form.get('password')!, 'passsword');

    this.subscription = this.form.get('password')!.valueChanges!.subscribe(() => {

      this.form.controls.repeatPassword.updateValueAndValidity( { onlySelf: true});

    });

    this.form.controls.repeatPassword.setValidators([
      sameValueValidate,
      Validators.required,
      Validators.minLength(6)
    ]);

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    }

}
