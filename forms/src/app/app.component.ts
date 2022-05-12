import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import { of } from 'rxjs';
import { map } from 'rxjs/operators'
import {IUser} from "./interfaces/user";

/*of(1000).pipe(map(x => x + 100)).subscribe((x) => {
  console.log(x);
}); */// the same thing as:

//Promise.resolve(1000).then(x => x+100).then(console.log);

// http request



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isActive = false;

  title = 'lessonTwo';

  toggleActive() {
    this.isActive = !this.isActive;
  }

}
