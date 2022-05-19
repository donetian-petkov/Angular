import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  inUpdateMode = false;

  isLoading = true;

  get user() {
    return this.userService.user;
  }

  constructor(private userService: UserService) {

    this.userService.getProfileInfo().subscribe(user => {
      this.isLoading = false;
    })

  }

  ngOnInit(): void {
  }

  updateProfile(form: NgForm): void {

    if(form.invalid) {
      return;
    }

    this.userService.updateProfileInfo(form.value).subscribe({
      next: () => {
        this.inUpdateMode = false;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
