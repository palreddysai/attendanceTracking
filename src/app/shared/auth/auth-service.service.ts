import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

private login_url = "assets/data/userList.json";

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  getdbData(): Observable<User[]>{
    return this.http.get<User[]>(this.login_url);
   
   }
login(email: string, password: string){
  console.log("user data",email);
  // if(user.email == "test@nwmissouiri.edu", user.password == "test@123$")
  return this.http.get<User[]>(`${this.login_url}`).pipe(
    map((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      // this.currentUserSubject.next();
      return user;
    })
  );
}
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
    // return of({ success: false });
  }

}
