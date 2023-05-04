import {Planning, PlanningType} from "./Planning";

export class DividerPlanning implements Planning {
  schedule: Date;

  constructor(schedule: Date) {
    this.schedule = schedule
  }

  getType(): PlanningType {
    return PlanningType.DELIMITER_DAY;
  }
}
