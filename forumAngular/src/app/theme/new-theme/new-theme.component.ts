import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../core/services/content.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent implements OnInit {

  constructor(private contentService: ContentService,
              private router: Router) { }


  createTheme(form: NgForm): void {
    if(form.invalid) {
      return;
    }
    this.contentService.saveTheme(form.value).subscribe({
      next: () => {
        this.router.navigate(['/theme'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
  }

}
