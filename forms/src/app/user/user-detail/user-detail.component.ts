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
export class UserDetailComponent implements OnInit {

  user: IUser | undefined;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      tap(() => this.user = undefined),
      switchMap(({id}) => this.userService.loadUser(id))
    ).subscribe(user => {
      this.user = user;
    })

    /*this.userService.loadUser(this.activatedRoute.snapshot.params.id).subscribe(user => {
      this.user = user;
    })*/



  }

}
