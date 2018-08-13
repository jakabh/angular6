import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsersComponent } from './show-users.component';
import {FormsModule} from '@angular/forms';
import {UserData} from '../user-list.service';

describe('ShowUsersComponent', () => {
  let component: ShowUsersComponent;
  let fixture: ComponentFixture<ShowUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUsersComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUsersComponent);
    component = fixture.componentInstance;
    const data:UserData = {
      userName: 'alma',
      password: 'pwd',
      imageUrl: 'alksdjf'
    };
    component.fromParent = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
