import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component(
  {
    selector: 'app-header',
    templateUrl: './app.header.html',
    styleUrls: ['./app.header.css']
  }
)
export class HeaderComponent {
  appTitle = 'Dummy Application'

  constructor(private router: Router) {

  }

  goToUsers() {
    this.router.navigateByUrl('/users');
  }
}
