import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface DateServiceDefinition {
  getCurrentDate(): string;
}

interface UserData {
  userName: string;
  password: string;
}


@Injectable(
  {
    providedIn: 'root'
  }
)
export class DateproviderService {

  constructor() {
    let users: UserData[];
    users = [
      {userName: 'alma', password: 'korte'},
      {userName: 'something', password: 'something'}
    ];
    console.log('Constructor of dateproviderservice');
    console.log(JSON.stringify(users));
  }

  getCurrentDate(): string {
    const d = new Date();
    return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
  }

  getCurrentDateWithPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      const d = new Date();

      const value = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
      resolve(value);
    });
  }

  getCurrentDateWithObservable(): Observable<string> {
    const d = new Date();

    const value = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
    return of(value);
  }
}
