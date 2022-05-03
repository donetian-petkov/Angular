import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from "./test.component";
import { ExampleComponent } from './example/example.component';
import { UserService } from "./user.service";
import { HttpClientModule} from "@angular/common/http";
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestModule } from './test/test.module';

export const myStringInjectionToken = new InjectionToken('myString');

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ExampleComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UserModule,
    AppRoutingModule,
    TestModule
  ],
  providers: [{
    provide: UserService,
    useClass: UserService
  },
    {
      provide: myStringInjectionToken,
      useValue: 'this is the value'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
