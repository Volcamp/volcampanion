import {Speaker} from "../data/dto/input/Speaker";
import {APIRoutes} from "../data/APIRoutes";
import {Observable} from "rxjs";
import {RequestManager} from "../data/RequestManager";
import {Injectable} from "@angular/core";
import {EnvironmentService} from "./EnvironmentService";
import {AbstractSpeakerService} from "./AbstractSpeakerService";

@Injectable()
export class SpeakerService implements AbstractSpeakerService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getSpeakers(idConf: string): Observable<Speaker[]> {
    return this.requestManager.get<Speaker[]>(this.env.getApiUrl() + APIRoutes.SPEAKER + "?idConf=" + idConf);
  }

  getSpeakerById(id: string): Observable<Speaker | undefined> {
    return this.requestManager.get<Speaker>(this.env.getApiUrl() + APIRoutes.SPEAKER + id);
  }
}
