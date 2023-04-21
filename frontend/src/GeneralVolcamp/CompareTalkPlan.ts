import {Plan} from "../Data/DTO/Plan";

export function compareSchedule(a: Plan, b: Plan): number {
  if (a.schedule < b.schedule) {
    return -1;
  } else if (a.schedule  >b.schedule) {
    return 1;
  } else {
    return 0;
  }
}
