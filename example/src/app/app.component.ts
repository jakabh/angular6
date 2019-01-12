import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {UserTo} from './user-to';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'example';
  myUserList: UserTo[];

  constructor(private myUserService: UserService) {


  }

  ngOnInit(): void {
      this.refreshUserList();
    this.myUserService.dataRefreshNotifier.subscribe((needsRefresh) => {
      this.refreshUserList();
    });
    }

  refreshUserList(){
  const obs = this.myUserService.getListOfUsers();

  obs.subscribe(
    (value) => {
      this.myUserList = value;
    },
    () => {
      console.log('something went wrong');
    },
    () => {
      console.log('no more data to receive');
    });
    }
}

