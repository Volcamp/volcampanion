import {Planning} from "../dto/Planning";
import {Speaker} from "../dto/Speaker";
import {Observable} from "rxjs";
import {TalkPlanning} from "../dto/TalkPlanning";

export abstract class DataService {
  abstract getTalkById(idTalk: number): Observable<TalkPlanning | undefined>

  abstract getSpeakerById(idSpeaker: number): Observable<Speaker | undefined>

  abstract providePlannings(idConf: string): Observable<Planning[]>

  abstract provideSpeakers(idConf: string): Observable<Speaker[]>
}
