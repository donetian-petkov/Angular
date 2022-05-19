import {Inject, Injectable} from '@angular/core';
import {IUser} from "../../shared/interfaces";
import { LocalStorage} from '../injection-tokens'
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, tap} from "rxjs";

const apiURL = environment.apiURL;

@Injectable()
export class UserService {

  user: IUser | null |  undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  /*constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) {

    try {
      const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    }

  }*/

  constructor( private http: HttpClient) {



  }

  login(data: {email: string, password: string}) {
   /* this.user = {
      email,
      firstName: 'John',
      lastName: 'Doe'
    };
    this.localStorage.setItem('<User>', JSON.stringify(this.user));*/

    return this.http.post<IUser>(`/api/login`, data, {})
      .pipe(
        tap((user) => this.user=user)
      );

  }

  register(data: {username: string; email: string; tel: string; password: string}){
    return this.http.post<IUser>(`/api/register`, data, {})
      .pipe(
        tap((user) => this.user=user)
      );
  }

  getProfileInfo() {
    return this.http.get<IUser>(`/api/users/profile`, {}).pipe(
      tap((user) => {
        (this as any).user.test = user;
      })
    );
  }

  updateProfileInfo(data: {username:string; email: string; tel: string;}) {
    return this.http.put<IUser>(`/api/users/profile`, data, {}).pipe(
      tap((user) => this.user = user)
    );
  }

  logout() {
    return this.http.post<IUser>(`/api/logout`, {}).pipe(
      tap(() => this.user = null)
    );
  }

}
