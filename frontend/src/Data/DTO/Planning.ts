export interface Planning {
  schedule: Date;

  getType(): PlanningType
}

export enum PlanningType {
  BREAK = "BREAK",
  KEYNOTE = "KEYNOTE",
  CONFERENCE = "CONFERENCE",
  WORKSHOP = "WORKSHOP",
  REX = "REX",
  LIGHTNING = "LIGHTNING",
  DELIMITER_DAY = "DELIMITER_DAY"
}
