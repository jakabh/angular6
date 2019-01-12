import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup(
    { 'username': new FormControl('alma'),
      'password': new FormControl('')}
  )
  constructor(private ue: UserService) { }

  ngOnInit() {
  }

  login(){
    console.log('loggin gthe user in'+JSON.stringify(this.loginForm.value));
    this.ue.loginUser(this.loginForm.value).subscribe(
      (response)=> {
        console.log(response);
      }
    );
  }

}
