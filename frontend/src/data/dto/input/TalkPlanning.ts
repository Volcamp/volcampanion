import {Planning, PlanningType} from "./Planning";
import {Room} from "./Room";
import {Talk} from "./Talk";

export class TalkPlanning implements Planning {
  room: Room | null;
  talk: Talk;
  schedule: Date;

  constructor(room: Room | null, talk: Talk, schedule: Date) {
    this.room = room
    this.talk = talk
    this.schedule = schedule
  }

  public static fromStorage(elt: any): TalkPlanning {
    return elt;
  }

  getType(): PlanningType {
    return this.talk.format.type;
  }
}
