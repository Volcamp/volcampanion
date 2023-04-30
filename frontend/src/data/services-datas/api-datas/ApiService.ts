import {DataService} from "../DataService";
import {Planning} from "../../dto/Planning";
import {Speaker} from "../../dto/Speaker";
import {ApiPlanManager} from "./api-managers/ApiPlanManager";
import {ApiSpeakerManager} from "./api-managers/ApiSpeakerManager";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TalkPlanning} from "../../dto/TalkPlanning";

@Injectable()
export class ApiService extends DataService {
  constructor(private apiPlanManager: ApiPlanManager, private apiSpeakerManager: ApiSpeakerManager) {
    super();
  }

  providePlannings(idConf: string): Observable<Planning[]> {
    return this.apiPlanManager.getPlannings(idConf);
  }

  provideSpeakers(idConf: string): Observable<Speaker[]> {
    return this.apiSpeakerManager.getSpeakers(idConf);
  }

  getSpeakerById(idSpeaker: number): Observable<Speaker | undefined> {
    return this.apiSpeakerManager.getPlanningById(idSpeaker.toString());
  }

  getTalkById(idTalk: number): Observable<TalkPlanning | undefined> {
    return this.apiPlanManager.getPlanningById(idTalk.toString());
  }
}
