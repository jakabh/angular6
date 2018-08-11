import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';

export interface UserData {
  userName: string;
  password: string;
  imageUrl: string;
}

const users: UserData[] = [
  {userName: 'Pista', password: '1234', imageUrl: 'https://i.ytimg.com/vi/_WbT4_c2Q78/maxresdefault.jpg'},
  {
    userName: 'Iancu',
    password: '934',
    imageUrl: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/052017/untitled-2_39.png?itok=9cmdSohY'
  },
  {userName: 'Barni', password: '1234', imageUrl: 'https://i.ytimg.com/vi/_WbT4_c2Q78/maxresdefault.jpg'},
  {userName: 'Messi', password: '1234', imageUrl: 'https://i.ytimg.com/vi/_WbT4_c2Q78/maxresdefault.jpg'},
  {userName: 'Dino', password: '1234', imageUrl: 'https://i.ytimg.com/vi/_WbT4_c2Q78/maxresdefault.jpg'},

]


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() {
  }

  getUserList(): Observable<UserData> {
  return  from(users);
}

}
