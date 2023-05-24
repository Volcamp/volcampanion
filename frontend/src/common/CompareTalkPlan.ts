import {Planning} from "../data/dto/input/Planning";

export function compareSchedule(a: Planning, b: Planning): number {
  if (a.schedule < b.schedule) {
    return -1;
  } else if (a.schedule > b.schedule) {
    return 1;
  } else {
    return 0;
  }
}

