import {Component, OnInit} from '@angular/core';
import {UserData, UserListService} from '../user-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  userList: UserData[] = [];
  userToShow: UserData;
  selectedButton: number;
  _selectedUser: UserData;

  set selectedUser(value: UserData) {
    this._selectedUser = value;
    console.log('selected user changed to: ' + value.userName);
  }

  get selectedUser() {
    return this._selectedUser;
  }

  newVariable: any;

  constructor(private userService: UserListService,
              private router: Router) {
  }

  showFirstUser() {
    this.userToShow = this.userList[0];
  }

  showSecondUser() {
    this.userToShow = this.userList[1];
  }

  highlightButton(eventPayload: UserData) {
    let index: number = 0;
    index = this.userList.findIndex((element) => {
      return element.userName === eventPayload.userName;
    });
    this.selectedButton = index;
    console.log('event from child component catched and handled:');
    console.log('button nr: ' + index + 'was pressed');
  }

  showSelectedUser() {
    this.router.navigate(['users/showUser', { username: this.selectedUser.userName}]);
  }

  changeUserToShow(eventPayload) {
    console.log('changeUserToShow');
    console.log(eventPayload.userName);
    console.log(eventPayload.direction);
    let index: number = 0;
    index = this.userList.findIndex((element) => {
      return element.userName === eventPayload.userName;
    });
    if (eventPayload.direction === 'forward') {
      this.userToShow = this.userList[(index + 1 < this.userList.length  ) ? index + 1 : 0];
    } else {
      this.userToShow = this.userList[(index - 1 >= 0) ? index - 1 : this.userList.length - 1];
    }
  }

  getStringUserList(): string {
    return JSON.stringify(this.userList);
  }

  ngOnInit() {
    this.userService.getUserList().subscribe(
      {
        next: (value) => {
          this.userList.push(value);
        },
        complete: () => {
          console.log('no more values to receive');
        }
      }
    )
  }

}
