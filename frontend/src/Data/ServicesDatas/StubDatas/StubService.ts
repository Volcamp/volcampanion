import {DataService} from "../DataService";
import {SPEAKER_DATA, TALK_DATA} from "./Stub";
import {Planning, PlanningType} from "../../DTO/Planning";
import {Speaker} from "../../DTO/Speaker";
import {TalkPlanning} from "../../DTO/TalkPlanning";

export class StubService extends DataService {
  async providePlans(): Promise<Planning[]> {
    return Promise.resolve(TALK_DATA);
  }

  async provideSpeakers(): Promise<Speaker[]> {
    return Promise.resolve(SPEAKER_DATA);
  }

  getTalkById(idTalk: number): Promise<TalkPlanning | undefined> {
    for (let planning of TALK_DATA) {
      if (planning.getType() != PlanningType.DELIMITER_DAY && planning.getType() != PlanningType.BREAK) {

        if ((planning as TalkPlanning).talk.id == idTalk) {
          return Promise.resolve((planning as TalkPlanning))
        }
      }
    }
    return Promise.resolve(undefined);
  }

  getSpeakerById(idSpeaker: number): Promise<Speaker | undefined> {
    return Promise.resolve(SPEAKER_DATA.find(speaker => speaker.id == idSpeaker));
  }
}
