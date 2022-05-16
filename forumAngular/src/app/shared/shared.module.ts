import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import { CustomValidatorDirective } from './custom-validator.directive';



@NgModule({
  declarations: [
    HomeComponent,
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    CustomValidatorDirective
  ]
})
export class SharedModule { }
