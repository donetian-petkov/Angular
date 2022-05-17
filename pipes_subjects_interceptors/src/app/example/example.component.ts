import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  classes=['test', 'test-1'];

  inputTest='inputTesting';

  title='testing';

  count = 0;
  showText = true;

  users = [
    {
      name: 'Ivan',
      age: 20
    },
    {
      name: 'Naiden',
      age: 30
    },
    {
      name: 'Ivana',
      age: 50
    }
  ]

  constructor() { }

  buttonClickHandler(): void {
    this.users.push({
      name: `Ivan ${this.count++}`,
      age: 22 + this.count
    })
  }

  toggleText(event: MouseEvent): void {
    event.preventDefault();
    this.showText = !this.showText;
  }

  changeTitleHandler(newTitle: string): void {
    this.title = newTitle;
  }

  ngOnInit(): void {
  }

}
