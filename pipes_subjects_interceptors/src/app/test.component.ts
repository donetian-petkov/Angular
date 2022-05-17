import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>Test</div>`,
  styles: [`div {color:blue}`]
})
export class TestComponent {
  title = 'testing';
}
