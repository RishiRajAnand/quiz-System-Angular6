/**
 * Intercepts HttpRequest and handles them.
 * @author:Nabin Kumar Das <nabin.das@impelsys.com>
 * @since:
 */
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('In http interceptor');
    return next.handle(request);
  }
}
