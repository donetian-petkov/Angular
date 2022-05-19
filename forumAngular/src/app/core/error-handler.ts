import {ErrorHandler, Injectable, Provider} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()

class GlobalErrorHandler implements ErrorHandler {

  constructor(private router: Router) {

  }

  handleError(error: any): void {

    console.log(error);

    this.router.navigate(['/error'], {queryParams: {error: "Ooops! Something went wrong!"}});

  }

}

export const globalErrorHandlerProvider: Provider = {
  provide: ErrorHandler,
  useClass: GlobalErrorHandler
}
