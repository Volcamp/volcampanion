import {Injectable} from "@angular/core";
import {EnvironmentService} from "./EnvironmentService";
import {RequestManager} from "../data/RequestManager";
import {Observable} from "rxjs";
import {APIRoutes} from "../data/APIRoutes";
import {AbstractFormatService} from "./AbstractFormatService";
import {Format} from "../data/dto/Format";
import {Theme} from "../data/dto/Theme";

@Injectable({
  providedIn: 'root'
})

export class FormatService implements AbstractFormatService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getFormats(): Observable<Format[]> {
    return this.requestManager.get<Format[]>(this.env.getApiUrl() + APIRoutes.FORMAT)
  }


}
