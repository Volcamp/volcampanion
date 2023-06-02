import {Speaker} from "../../data/dto/input/Speaker";
import {Observable} from "rxjs";
import {CreateSpeaker} from "../../data/dto/output/CreateSpeaker";

export abstract class AbstractSpeakerService {
  abstract getSpeakerById(idSpeaker: string): Observable<Speaker | undefined>

  abstract getSpeakers(idConf: string): Observable<Speaker[]>

  abstract addSpeaker(speaker: CreateSpeaker): Observable<boolean>

  abstract deleteSpeaker(idTalk: string): Observable<boolean>

  abstract putSpeaker(speaker: CreateSpeaker): Observable<boolean>
}
