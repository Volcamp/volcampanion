import {Plan, PlanningType} from "./Plan";
import {MiniTalk} from "./Talk";

export class BreakPlan implements Plan {
  break: MiniTalk;
  schedule: Date;

  constructor(pause: MiniTalk, schedule: Date) {
    this.break = pause
    this.schedule = schedule
  }

  getType(): PlanningType {
    return this.break.format.type;
  }


}
