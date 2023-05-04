import {Planning, PlanningType} from "./Planning";
import {TalkTeaser} from "./Talk";

export class BreakPlanning implements Planning {
  break: TalkTeaser;
  schedule: Date;

  constructor(pause: TalkTeaser, schedule: Date) {
    this.break = pause
    this.schedule = schedule
  }

  getType(): PlanningType {
    return this.break.format.type;
  }

}
