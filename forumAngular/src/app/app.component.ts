import { Component } from '@angular/core';
import {ContentService} from "./core/services/content.service";
import {IPost} from "./shared/interfaces";
import {UserService} from "./core/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recentPosts: IPost[] | undefined;

  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  constructor(private contentService: ContentService,
              private userService: UserService) {

    this.userService.getProfileInfo().subscribe({
      error: (error) => {
        this.userService.user = null;
        throw error;
      }
    })
    this.fetchRecentPosts();

  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);

  }

}
