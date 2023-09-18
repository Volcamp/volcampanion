import {EventColor} from "calendar-utils"
import {CalendarEvent, CalendarEventAction} from "angular-calendar";
import {CalendarTalk} from "../CalendarTalk";

export class CalendarTalkMapper {
  static toCalendar(calendarTalk: CalendarTalk, color?: EventColor, actions?: CalendarEventAction[]): CalendarEvent<CalendarTalk> {
    return {
      start: new Date(),
      end: new Date(new Date().getTime() + calendarTalk.talk.format.duration * 1000),
      title: `${calendarTalk.talk.id} - ${calendarTalk.talk.title}`,
      color: color,
      actions: actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
      meta: calendarTalk,
    }
  }
}
