import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Injectable} from "@angular/core";
import {UserService} from "../services/UserService";

@Injectable()
export class RequestManager {

  constructor(private readonly http: HttpClient, private userService: UserService) {
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data);
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }


  getTokenParam(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`
    });
  }

  getAuthorization<T>(url: string): Observable<T | undefined> {
    if (this.userService.isLogged()) {
      return this.http.get<T>(url, {headers: this.getTokenParam()});
    } else {
      return of(undefined)
    }
  }

  postAuthorization<T>(url: string, data: any): Observable<T | undefined> {
    if (this.userService.isLogged()) {
      return this.http.post<T>(url, data, {headers: this.getTokenParam()});
    } else {
      return of(undefined)
    }
  }

  putAuthorization<T>(url: string, data: any): Observable<T | undefined> {
    if (this.userService.isLogged()) {
      return this.http.put<T>(url, data, {headers: this.getTokenParam()});
    } else {
      return of(undefined)
    }
  }

  deleteAuthorization<T>(url: string): Observable<T | undefined> {
    if (this.userService.isLogged()) {
      return this.http.delete<T>(url, {headers: this.getTokenParam()});
    } else {
      return of(undefined)
    }
  }
}
