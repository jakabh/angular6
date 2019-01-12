import { Component, OnInit } from '@angular/core';
import {UserTo} from '../user-to';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  myUserData: UserTo = new UserTo();

  loginForm: FormGroup = new FormGroup(
    {
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'username': new FormControl(''),
      'password': new FormControl('')
    }
  )
  constructor(private se: UserService) { }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(
      (newValue)=>{
        this.myUserData = newValue;
      }
    )
  }
  submitUserData(){
    // const user: UserTo = new UserTo();
    // this.loginForm.setValue(user);
    this.se.sendNewUserData(this.loginForm.value).subscribe(
      (response) => {
        console.log( response ? 'successfully saved' : 'save went wrong');
        if ( response ){
          this.se.notifyDataClients();
        }
      }
    )
  }
}
