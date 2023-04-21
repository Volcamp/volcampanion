import {Plan} from "./Plan";
import {MiniTalk} from "./Talk";

export const TYPE_BREAK_PLAN="BREAK"

export class BreakPlan implements Plan {
  break: MiniTalk;
  schedule: Date;

  constructor(pause:MiniTalk,schedule : Date) {
    this.break=pause
    this.schedule=schedule
  }
  getType(): string {
    return this.break.format.type;
  }


}
