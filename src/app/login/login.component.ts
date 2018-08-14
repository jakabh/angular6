import {Component, OnInit} from '@angular/core';
import {LSKEY, UserData, UserListService} from '../user-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: UserData;
  userList: UserData[];

  constructor(private userService: UserListService) {
    this.userModel = {
      userName: '',
      password: '',
      imageUrl: ''
    };
    this.loggedIn = userService.isLoggedIn();
  }

  wrongCredentials = false;
  loggedIn = false;

  submitForm() {
    console.log('Form was submitted with the following data:' +
      JSON.stringify(this.userModel));
    this.userService.validateUserCredentials(this.userModel.userName,
      this.userModel.password).subscribe((response) => {
      console.log('credentials are valid is : ' + response);
      if (response) {
        this.loggedIn = true;
        this.wrongCredentials = false;
        this.login();
      } else {
        this.wrongCredentials = true;
        this.loggedIn = false;
      }
    });
  }
  login(){
    localStorage.setItem(LSKEY,this.userModel.userName);
    this.loggedIn = true;
  }
  logout(){
    if ( localStorage.getItem(LSKEY) ){
      localStorage.removeItem(LSKEY);
      this.loggedIn = false;
    }
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

}
