import {TalkPlan} from "../Data/DTO/TalkPlan";

export function compareSchedule(a: TalkPlan, b: TalkPlan): number {
  if (a.schedule < b.schedule) {
    return -1;
  } else if (a.schedule > b.schedule) {
    return 1;
  } else {
    return 0;
  }
}
