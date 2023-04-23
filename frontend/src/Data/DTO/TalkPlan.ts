import {Plan, PlanningType} from "./Plan";
import {Room} from "./Room";
import {Talk} from "./Talk";

export class TalkPlan implements Plan {
  room: Room;
  talk: Talk;
  schedule: Date;

  constructor(room: Room, talk: Talk, schedule: Date) {
    this.room = room
    this.talk = talk
    this.schedule = schedule
  }

  getType(): PlanningType {
    return this.talk.format.type;
  }
}
