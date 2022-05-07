import { Component, OnInit } from '@angular/core';
import {ITheme} from "../../shared/interfaces";
import {ContentService} from "../../content.service";
import {ActivatedRoute} from "@angular/router";
/*import {ContentService} from "../content.service";
import {ITheme} from "../shared/interfaces";*/

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

 /* themes: ITheme[] | undefined;

  constructor(private contentService: ContentService) {

    this.fetchThemes();

  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);

  }*/

  theme: ITheme | undefined;

  constructor(private contentService: ContentService,
              private activatedRoute: ActivatedRoute) {

    this.fetchTheme();

  }

  fetchTheme (): void {
    this.theme = undefined;
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.contentService.loadTheme(id).subscribe(theme => this.theme = theme);
  }


}
