import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import { CustomValidatorDirective } from './custom-validator.directive';
import { ShortenPipe } from './shorten.pipe';
import { TimediffPipe } from './timediff.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    CustomValidatorDirective,
    ShortenPipe,
    TimediffPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    CustomValidatorDirective,
    ShortenPipe,
    TimediffPipe
  ]
})
export class SharedModule { }
