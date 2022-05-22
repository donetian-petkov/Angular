import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent  {

  user$ = this.userService.user$;

  constructor(activatedRoute: ActivatedRoute, private userService: UserService) {

    activatedRoute.params.subscribe(({id}) => {
      this.userService.loadUser(id);
    });

  }

}
