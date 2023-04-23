import {Plan, PlanningType} from "./Plan";

export class DividerPlan implements Plan {
  schedule: Date;

  constructor(schedule: Date) {
    this.schedule = schedule
  }

  getType(): PlanningType {
    return PlanningType.DELIMITER_DAY;
  }


}
