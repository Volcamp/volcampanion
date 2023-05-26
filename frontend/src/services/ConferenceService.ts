import {Injectable} from '@angular/core';
import {RequestManager} from "../data/RequestManager";
import {map, Observable, of} from "rxjs";
import {Conference} from "../data/dto/input/Conference";
import {EnvironmentService} from "./EnvironmentService";
import {APIRoutes} from "../data/APIRoutes";
import {AbstractConferenceService} from "./abstract/AbstractConferenceService";


export const ACTIVE_ID_CONF = "activeIdConf"

@Injectable({
  providedIn: 'root'
})
export class ConferenceService implements AbstractConferenceService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getCurrentConference(): Observable<Conference> {
    let conf = window.localStorage.getItem(ACTIVE_ID_CONF);
    if (conf == null) {
      return this.requestManager.get<Conference>(this.env.getApiUrl() + APIRoutes.CONFERENCE + APIRoutes.CONFERENCE_ACTIVE).pipe(
        map(conf => {
            window.localStorage.setItem(ACTIVE_ID_CONF, JSON.stringify(conf));
            return conf
          }
        ));
    } else {
      return of(JSON.parse(conf))
    }
  }

  getConferences(): Observable<Conference[]> {
    return this.requestManager.get<Conference[]>(this.env.getApiUrl() + APIRoutes.CONFERENCE);

  }


}
