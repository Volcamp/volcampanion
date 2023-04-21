import {MiniTalk, Talk} from "./Talk";
import {Room} from "./Room";
import {Plan} from "./Plan";



export const TYPE_DIVIDER_PLAN="divider"

export class DividerPlan implements Plan {
  schedule: Date;

  constructor(schedule : Date) {
    this.schedule=schedule
  }

  getType(): string {
    return TYPE_DIVIDER_PLAN;
  }


}
