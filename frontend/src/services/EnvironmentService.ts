import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private readonly apiUrl;

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }
}
