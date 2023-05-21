import {Planning} from "../data/dto/Planning";
import {Speaker} from "../data/dto/Speaker";
import {Observable} from "rxjs";
import {TalkPlanning} from "../data/dto/TalkPlanning";

export abstract class AbstractSpeakerService {
  abstract getSpeakerById(idSpeaker: string): Observable<Speaker | undefined>

  abstract getSpeakers(idConf: string): Observable<Speaker[]>
}
