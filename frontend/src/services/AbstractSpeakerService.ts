import {Speaker} from "../data/dto/input/Speaker";
import {Observable} from "rxjs";

export abstract class AbstractSpeakerService {
  abstract getSpeakerById(idSpeaker: string): Observable<Speaker | undefined>

  abstract getSpeakers(idConf: string): Observable<Speaker[]>
}
