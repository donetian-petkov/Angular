import {Injectable, Provider} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import { environment } from '../../environments/environment';
import {Router} from "@angular/router";
import {UserService} from "./services/user.service";

const API_URL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor{

  constructor(private router: Router,
              private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let reqStream$ = next.handle(req);

    if (req.url.startsWith('/api')) {
      reqStream$ = next.handle(req.clone({
        url: req.url.replace('/api', API_URL),
        withCredentials: true
      }));
    }

    return reqStream$.pipe(catchError((err) => {
      this.router.navigate(['/error'], { queryParams: { error: err.message} });
      return throwError(err);
    }));
  }

}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
}
