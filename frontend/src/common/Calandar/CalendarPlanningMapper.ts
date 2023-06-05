import {Planning} from "../../data/dto/input/Planning";
import {CalendarEventDataContainer} from "./CalendarEventDataContainer";
import {EventColor} from "calendar-utils"
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";
import {CalendarEventAction} from "angular-calendar";

export class CalendarPlanningMapper {
  static toCalendar(planning: Planning, color?: EventColor, actions?: CalendarEventAction[]): CalendarEventDataContainer<Planning> {
    return {
      start: planning.schedule,
      end: new Date(planning.schedule.getTime() + (planning as any).talk.format.duration * 1000),
      title: `${(planning as TalkPlanning).talk.id} - ${(planning as any).talk.title}`,
      color: color,
      actions: actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
      data: planning,
    }


  }
/*
  static toPlanning(event: CalendarEventDataContainer<Planning>): Planning {

  }*/
}
