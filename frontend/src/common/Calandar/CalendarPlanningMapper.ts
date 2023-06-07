import {Planning} from "../../data/dto/input/Planning";
import {EventColor} from "calendar-utils"
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";
import {CalendarEvent, CalendarEventAction} from "angular-calendar";
import {colors} from "./Colors";

export class CalendarPlanningMapper {
  static toCalendar(planning: Planning, color?: EventColor, actions?: CalendarEventAction[]): CalendarEvent<Planning> {
    return {
      start: planning.schedule,
      end: new Date(planning.schedule.getTime() + (planning as any).talk.format.duration * 1000),
      title: `${(planning as TalkPlanning).talk.id} - ${(planning as any).talk.title}`,
      color: colors.yellow,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
      meta: planning,
    }
  }
}
