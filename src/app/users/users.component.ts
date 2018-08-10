import { Component, OnInit } from '@angular/core';
import {UserData, UserListService} from '../user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: UserData[] = [];
  constructor(private userService: UserListService) {
  }

  getStringUserList(): string {
    return JSON.stringify(this.userList);
}
  ngOnInit() {
    this.userService.getUserList().subscribe(
      {
        next: (value) => {
          this.userList.push(value);
          console.log('Value received: ' + JSON.stringify(value));
        },
        complete: () => {
          console.log('no more values to receive' );
        }
      }
    )
  }

}
