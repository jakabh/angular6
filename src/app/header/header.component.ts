import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserListService} from '../user-list.service';

@Component(
  {
    selector: 'app-header',
    templateUrl: './app.header.html',
    styleUrls: ['./app.header.css']
  }
)
export class HeaderComponent {
  appTitle = 'Dummy Application'

  constructor(private router: Router, private userService: UserListService) {

  }

  makeRequest() {
    this.userService.getUsersFromServer().subscribe((resp) => {
      console.log('dummy request made');
    });
  }

  goToUsers() {
    this.router.navigateByUrl('/users');
  }
}
