import {Injectable} from '@angular/core';
import {RequestManager} from "./api-general/RequestManager";
import {ApiLinks} from "./api-general/ApiLinks";
import {map, Observable, of} from "rxjs";
import {Conference} from "../../dto/Conference";
import {EnvironmentService} from "../../environments/environment.service";
import {LinkComposerService} from "./api-general/LinkComposer.service";


export const ACTIVE_ID_CONF = "activeIdConf"

@Injectable({
  providedIn: 'root'
})
export class CurrentConferenceService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getActiveId(): Observable<Conference> {
    let conf = window.localStorage.getItem(ACTIVE_ID_CONF);
    if (conf == null) {
      return this.requestManager.get<Conference>(LinkComposerService.constructEndPoint(this.env.apiUrl, ApiLinks.CONFERENCE_ACTIVE)).pipe(
        map(conf => {
            window.localStorage.setItem(ACTIVE_ID_CONF, JSON.stringify(conf));
            return conf
          }
        ));
    } else {
      return of(JSON.parse(conf))
    }
  }

}
