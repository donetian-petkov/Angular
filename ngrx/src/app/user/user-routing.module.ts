import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { ParamsActivate } from '../core/guards/params.activate'

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'detail',
    component: UserDetailComponent,
    canActivate: [ParamsActivate],
    data: {
      paramsActivate: ['id'],
      paramsActivateRedirectURL: '/user-list'
    }
  },
  {
    path: 'user-detail/:id',
    component: UserDetailComponent,
    canActivate: [ParamsActivate],
    data: {
      paramsActivate: ['id'],
      paramsActivateRedirectURL: '/user-list'
    }
  }
]

export const UserRoutingModule = RouterModule.forChild(routes);
