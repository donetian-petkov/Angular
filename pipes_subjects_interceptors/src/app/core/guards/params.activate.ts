import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()

export class ParamsActivate implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const {data: {paramsActivate, paramsActivateRedirectUrl }} = route;

    if (!paramsActivate || !Array.isArray(paramsActivate) || paramsActivate.length === 0) {
      return true;
    }

    const hasAllRouteParams = paramsActivate.reduce((acc, curr) => {
      return !!route.params[curr] && acc
    }, true);

    if (hasAllRouteParams) {
      return true;
    }

    return this.router.parseUrl(paramsActivateRedirectUrl || '/');

  }
}
