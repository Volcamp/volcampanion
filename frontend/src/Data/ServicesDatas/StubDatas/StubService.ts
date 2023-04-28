import {DataService} from "../DataService";
import {SPEAKER_DATA, TALK_DATA} from "./Stub";
import {Planning, PlanningType} from "../../DTO/Planning";
import {Speaker} from "../../DTO/Speaker";
import {TalkPlan} from "../../DTO/TalkPlan";

export class StubService extends DataService {
  async providePlans(): Promise<Planning[]> {
    return Promise.resolve(TALK_DATA);
  }

  async provideSpeakers(): Promise<Speaker[]> {
    return Promise.resolve(SPEAKER_DATA);
  }

  getTalkById(idTalk: number): Promise<TalkPlan | undefined> {
    for (let plan of TALK_DATA) {
      if (plan.getType() != PlanningType.DELIMITER_DAY && plan.getType() != PlanningType.BREAK) {

        if ((plan as TalkPlan).talk.id == idTalk) {
          return Promise.resolve((plan as TalkPlan))
        }
      }
    }
    return Promise.resolve(undefined);
  }

  getSpeakerById(idSpeaker: number): Promise<Speaker | undefined> {
    return Promise.resolve(SPEAKER_DATA.find(speaker => speaker.id==idSpeaker));
  }
}
