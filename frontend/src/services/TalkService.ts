import {APIRoutes} from "../data/APIRoutes";
import {RequestManager} from "../data/RequestManager";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {EnvironmentService} from "./EnvironmentService";
import {AbstractTalkService} from "./AbstractTalkService";
import {Talk} from "../data/dto/input/Talk";
import {Speaker} from "../data/dto/input/Speaker";


@Injectable()
export class TalkService implements AbstractTalkService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getTalkById(idTalk: string): Observable<Talk> {
    return this.requestManager.get<Talk>(this.env.getApiUrl() + APIRoutes.TALKS + idTalk);
  }

  getTalks(idConf: string): Observable<Talk[]> {
    return this.requestManager.get<Talk[]>(this.env.getApiUrl() + APIRoutes.TALKS + APIRoutes.ID_CONF + idConf);
  }
}
