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

  constructor(private router: Router,
              private userService: UserListService) {

  }

  goToUsers() {
    this.router.navigateByUrl('/users');
  }

  makeRequest() {
    this.userService.getUsersFromServer().subscribe(
      (value) => {
        console.log('received!!!');
      }
    );
  }
}
