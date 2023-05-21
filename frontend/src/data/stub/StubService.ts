import {AbstractDataService} from "../../services/AbstractDataService";
import {SPEAKER_DATA, TALK_DATA} from "./Stub";
import {Planning, PlanningType} from "../dto/Planning";
import {Speaker} from "../dto/Speaker";
import {Observable, of} from "rxjs";
import {TalkPlanning} from "../dto/TalkPlanning";

export class StubService extends AbstractDataService {
  providePlannings(idConf: string): Observable<Planning[]> {
    return of(TALK_DATA);

  }

  provideSpeakers(idConf: string): Observable<Speaker[]> {
    return of(SPEAKER_DATA);
  }

  getTalkById(idTalk: number): Observable<TalkPlanning | undefined> {
    for (let planning of TALK_DATA) {
      if (planning.getType() != PlanningType.DELIMITER_DAY && planning.getType() != PlanningType.BREAK) {

        if ((planning as TalkPlanning).talk.id == idTalk) {
          return of((planning as TalkPlanning))
        }
      }
    }
    return of(undefined);
  }

  getSpeakerById(idSpeaker: number): Observable<Speaker | undefined> {
    return of(SPEAKER_DATA.find(speaker => speaker.id == idSpeaker));
  }
}
