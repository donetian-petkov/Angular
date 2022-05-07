import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {ContentService} from "./content.service";
import {AppRoutingModule} from "./app-routing.module";
import {UserModule} from "./user/user.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ThemeModule} from "./theme/theme.module";
import {SharedModule} from "./shared/shared.module";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    UserModule,
    FontAwesomeModule,
    ThemeModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
