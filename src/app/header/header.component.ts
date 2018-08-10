import {Component} from '@angular/core';

@Component(
  {
    selector: 'app-header',
    templateUrl: './app.header.html',
    styleUrls: ['./app.header.css']
  }
)
export class HeaderComponent {
  appTitle = 'Dummy Application'

  constructor() {

  }

}
