import {Component, OnInit} from '@angular/core';
import {LSKEY, TOKENKEY, UserData, UserListService} from '../user-list.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: UserData;
  userList: UserData[];
  wrongCredentials = false;

  constructor(public userService: UserListService) {
    if (userService.isLoggedIn()) {
      this.userModel = userService.getCurrentUser();
    } else {
      this.userModel = {
        userName: '',
        password: '',
        imageUrl: ''
      };
    }

  }

  submitForm(formControl) {
    this.wrongCredentials = false;
    console.log('Form was submitted with the following data:' +
      JSON.stringify(this.userModel));
    this.userService.validateUserCredentials(this.userModel.userName,
      this.userModel.password).subscribe((response) => {
        if (response) {
          localStorage.setItem(LSKEY, this.userModel.userName);
          localStorage.setItem(TOKENKEY, response.token);
        } else {
          this.wrongCredentials = true;
        }
        formControl.reset();
      },
      (error) => {
        formControl.reset();
        this.wrongCredentials = true;
      });
  }

  ngOnInit() {
    this.userService.getUsersFromServer().subscribe(
      {
        next: (value: UserData[]) => {
          console.log('received: ' + JSON.stringify(value));
          this.userList = value;
        }
      }
    );
  }

  logout() {
    this.userService.logout();
    this.userModel = {
      userName: '',
      password: '',
      imageUrl: ''
    };
  }

}
