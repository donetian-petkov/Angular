import {Routes, RouterModule, Router} from '@angular/router';
import { NgModule } from "@angular/core";
import {HomeComponent} from "./shared/home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AsideComponent} from "./theme/aside/aside.component";
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'theme',
    loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
