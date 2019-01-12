import { Component, OnInit } from '@angular/core';
import {UserTo} from '../user-to';
import {UserService} from '../user.service';

@Component({
  selector: 'app-td-user',
  templateUrl: './td-user.component.html',
  styleUrls: ['./td-user.component.css']
})
export class TdUserComponent implements OnInit {

  myUserData: UserTo = new UserTo();
  errorOccured = false;
  constructor(private myUserService: UserService) { }

  ngOnInit() {
  }
  submitUserData(){
    this.myUserService.sendNewUserData(this.myUserData).subscribe(
      (result) => {
        if ( result ) {
          console.log('User data successfully saved');
          this.myUserService.notifyDataClients();
        } else {
          console.log('User data could not be saved');
        }
      },
      (error) => {
        this.errorOccured = true;
        console.loge(`cannot save due to: ${error}`);
      }
    );
  }
}
