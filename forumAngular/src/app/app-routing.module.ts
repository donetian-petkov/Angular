import {Routes, RouterModule, Router} from '@angular/router';
import { NgModule } from "@angular/core";
import {HomeComponent} from "./shared/home/home.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
