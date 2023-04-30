import {Speaker} from "../../../dto/Speaker";
import {ApiLinks} from "../api-general/ApiLinks";
import {Observable} from "rxjs";
import {RequestManager} from "../api-general/RequestManager";
import {LinkComposerService} from "../api-general/LinkComposer.service";
import {Injectable} from "@angular/core";
import {EnvironmentService} from "../../../environments/environment.service";

@Injectable()
export class ApiSpeakerManager {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getSpeakers(idConf: string): Observable<Speaker[]> {
    return this.requestManager.get<Speaker[]>(LinkComposerService.constructEndPointConf(this.env.apiUrl, ApiLinks.SPEAKER, idConf));
  }

  getPlanningById(id: string): Observable<Speaker> {
    return this.requestManager.get<Speaker>(LinkComposerService.constructEndPointId(this.env.apiUrl, ApiLinks.SPEAKER, id));
  }
}
