import {Routes, RouterModule, Router} from '@angular/router';
import { NgModule } from "@angular/core";
import {ThemeComponent} from "./theme/theme.component";
import {NewThemeComponent} from "./new-theme/new-theme.component";
import {ThemesComponent} from "./themes/themes.component";
import {AuthActivate} from "../core/guards/auth.activate";
import {NotFoundComponent} from "../not-found/not-found.component";


const routes: Routes = [
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ThemesComponent
      },
      {
        path: ':themeId',
        component: ThemeComponent
      }
    ]
  },
  {
    path: 'add-theme',
    component: NewThemeComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login'
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThemeRoutingModule {}
