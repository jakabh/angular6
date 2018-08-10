import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface DateServiceDefinition {
  getCurrentDate(): string;
}

@Injectable()
export class DateproviderService {

  constructor() {
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
