import {Component, OnInit} from '@angular/core';
import {UserData} from '../user-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: UserData;

  constructor() {
    this.userModel = {
      userName: '',
      password: '',
      imageUrl: ''
    };
  }

  submitForm() {
    console.log('Form was submitted with the following data:' +
      JSON.stringify(this.userModel));
  }

  ngOnInit() {
  }

}
