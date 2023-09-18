import {EventColor} from "calendar-utils";
import {colors} from "./Colors";

export function getColorRoom(input: string | undefined): EventColor {
  if (input === undefined) {
    return colors.white;
  }
  if (input.toLowerCase().includes('auditorium')) {
    return colors.red;
  } else if (input.toLowerCase().includes('mezzanine')) {
    return colors.yellow;
  } else if (input.toLowerCase().includes('showroom')) {
    return colors.blue;
  } else if (input.toLowerCase().includes('formation')) {
    return colors.green;
  } else {
    return colors.white;
  }
}
