import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserData, UserListService} from '../user-list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  _fromParent: UserData
  @Input()
  get fromParent() {
    return this._fromParent;
  }

  _numberOfImages;
  imageArray = [];

  set numberOfImages(value) {
    this._numberOfImages = value;
    this.imageArray = [];
    for (let i = 0; i < value; i++) {
      this.imageArray.push(i);
    }
  };

  set fromParent(valueToSet) {
    this._fromParent = valueToSet;
    this.userChangedEvent.emit(this.fromParent);
  }

  goForward() {
    this.iterationEvent.emit({
      userName: this._fromParent.userName,
      direction: 'forward'
    });
  }

  goBackward() {
    this.iterationEvent.emit({
      userName: this._fromParent.userName,
      direction: 'backward'
    });
  }

  @Output()
  iterationEvent = new EventEmitter();
  @Output()
  userChangedEvent = new EventEmitter<UserData>();

  constructor(private activeRoute: ActivatedRoute,
               private userService: UserListService) {
    const userToShow = this.activeRoute.snapshot.paramMap.get('username');

  }


  ngOnInit() {
  }

}
