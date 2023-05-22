import {Injectable} from "@angular/core";
import {AbstractThemeService} from "./AbstractThemeService";
import {Observable} from "rxjs";
import {Theme} from "../data/dto/Theme";
import {EnvironmentService} from "./EnvironmentService";
import {RequestManager} from "../data/RequestManager";
import {APIRoutes} from "../data/APIRoutes";

@Injectable({
  providedIn: 'root'
})

export class ThemeService implements AbstractThemeService{
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }
  getThemes(): Observable<Theme[]> {
    return this.requestManager.get<Theme[]>(this.env.getApiUrl() + APIRoutes.THEMES)
  }

}
