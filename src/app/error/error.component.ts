import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <h1>The page you are looking for does not exist!</h1>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
