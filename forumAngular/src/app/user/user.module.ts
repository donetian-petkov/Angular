import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserRoutingModule} from "./user-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {UserService} from "./user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    UserRoutingModule,
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
