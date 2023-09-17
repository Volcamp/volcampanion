import {Planning, PlanningType} from "../data/dto/input/Planning";
import {TalkPlanning} from "../data/dto/input/TalkPlanning";

export function compareSchedule(a: Planning, b: Planning): number {
  if (a.schedule < b.schedule) {
    return -1;
  } else if (a.schedule > b.schedule) {
    return 1;
  } else {
    return 0;
  }
}

export function compareTalkPlanning(a: Planning, b: Planning) {
  if (a.getType() == PlanningType.BREAK && a.getType() == PlanningType.DELIMITER_DAY ||
    b.getType() == PlanningType.BREAK && b.getType() == PlanningType.DELIMITER_DAY){
    return false;
  }
  return compareSchedule(a, b) === 0  &&
    (a as TalkPlanning).talk.id === (b as TalkPlanning).talk.id &&
    (a as TalkPlanning).room?.id === (b as TalkPlanning).room?.id;
}

