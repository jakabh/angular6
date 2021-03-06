import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

export interface UserData {
  userName: string;
  password: string;
  imageUrl: string;
}
export const LSKEY = 'currentUser';
export const TOKENKEY = 'webtoken';
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
  baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getUserList(): Observable<UserData> {
    return from(users);
  }

  getUsersFromServer(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.baseURL + '/teszt', {
      params: new HttpParams().set('dummyParam', 'dummyvalue')
    });
  }
  isLoggedIn() {
    let username = localStorage.getItem(LSKEY);
    return username ? true : false ;
  }
  validateUserCredentials(username: string, password: string): Observable<any> {

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    return this.http.post(this.baseURL + '/authorize',
      body.toString(),
      {
        headers: new HttpHeaders(
          {'Content-Type': 'application/x-www-form-urlencoded'}
        )
      });
  }
}
