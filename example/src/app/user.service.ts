import {EventEmitter, Injectable} from '@angular/core';
import {UserTo} from './user-to';
import {Observable, of} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

const userList: UserTo[] = [
  { firstName: 'a', lastName: 'b', username: 'c', password: 'd'}
];
@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataRefreshNotifier: EventEmitter<boolean> = new EventEmitter();
  constructor(private myHttpService: HttpClient) { }
  baseUrl = environment.baseUrl;
  getListOfUsers( ): Observable<UserTo[]> {

      console.log('getListOfUsers');
      return this.myHttpService.get<UserTo[]>(`${this.baseUrl}/users`,
        {
          reportProgress : true
        });
  }
  sendNewUserData( userData: UserTo ): Observable<boolean> {
    const targetURL = `${this.baseUrl}/users`;
    return this.myHttpService.post(targetURL, userData);
  }
  notifyDataClients(){
    console.log('notify called');
    this.dataRefreshNotifier.emit(true);
  }
}
