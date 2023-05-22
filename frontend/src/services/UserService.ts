import {Injectable} from "@angular/core";
import {EventEmitter} from "../event/EventEmitter";
import {BackArrowVisibilityEvent} from "../event/BackArrowVisibilityEvent";
import {LogEvent} from "../event/LogEvent";
import {LogEventArgs} from "../event/LogEventArgs";

export const TOKEN = "token"

@Injectable()
export class UserService {
  logEventEmitter = new EventEmitter<LogEvent>(LogEvent);

  isLogged(): boolean {
    const token: string | null = window.localStorage.getItem(TOKEN);

    if (token === '' || token === null) return false;
    const tokenAfterParse = this.parseJwt(token);
    if (tokenAfterParse === '') return false;
    return new Date(this.parseJwt(token).exp * 1000) >= new Date();

  }

  isAdmin(): boolean {
    const token: string | null = window.localStorage.getItem(TOKEN);
    if (token === '' || token === null) return false;
    return this.parseJwt(token)._roles.lower() === "admin";
  }

  saveToken(token: string) {
    window.localStorage.setItem(TOKEN, JSON.stringify(token));
    console.log("yoo")
    this.logEventEmitter.emit(new LogEventArgs(this.isLogged()));
  }

  getToken(): string {
    if (this.isLogged()) { // @ts-ignore
      return window.localStorage.getItem(TOKEN);
    } else return '';
  }

  parseJwt(token: string) {
    let base64Url: string = token.split('.')[1];
    if (base64Url === undefined) {
      return '';
    }
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  clearToken() {
    window.localStorage.removeItem(TOKEN);
    this.logEventEmitter.emit(new LogEventArgs(this.isLogged()));
  }
}

