import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserData} from '../user-list.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  _fromParent: UserData
  @Input()
  get fromParent() {
    console.log('fromParent was queried');
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
    console.log('fromParent was changed');
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

  constructor() {
  }

  ngOnInit() {
  }

}
