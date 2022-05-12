import {Inject, Injectable} from '@angular/core';
import {IUser} from "./interfaces/user";
import {myStringInjectionToken} from './app.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*users = [
    {
      name: 'Ivan',
      age: 20
    },
    {
      name: 'Naiden',
      age: 30
    },
    {
      name: 'Ivana',
      age: 50
    }
  ]*/


  /*constructor(@Inject(myStringInjectionToken) myString: string) {

    console.log(myString);

  }

  addNewUserHandler(newUser: IUser){
    this.users.push(newUser);
  }*/

  constructor(private http: HttpClient) {

  }

  loadUsers(search: string = '') {

    const query  = search ? `?email_like=${search}` : '';

    return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users${query}`)

  }

  loadUser(id: number) {

    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);

  }

}
