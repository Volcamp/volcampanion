import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Injectable} from "@angular/core";
import {UserService} from "../services/UserService";

@Injectable()
export class RequestManager {

  constructor(private readonly http: HttpClient, private userService: UserService) {
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {headers: this.getHeaders()});
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data, {headers: this.getHeaders()});
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data, {headers: this.getHeaders()});
  }

  delete<T>(url: string): Observable<T> {
    console.log(url)
    return this.http.delete<T>(url, {headers: this.getHeaders()});
  }


  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.userService.getToken()}`,
      'Content-Type': 'application/json'
    });
  }
}
