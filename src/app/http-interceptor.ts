import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TOKENKEY} from './user-list.service';

export class MyHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem(TOKENKEY);
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  return next.handle(req);
  }
}
