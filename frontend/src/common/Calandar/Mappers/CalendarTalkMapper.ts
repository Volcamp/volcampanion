import {Planning} from "../../../data/dto/input/Planning";
import {EventColor} from "calendar-utils"
import {TalkPlanning} from "../../../data/dto/input/TalkPlanning";
import {CalendarEvent, CalendarEventAction} from "angular-calendar";
import {colors} from "../Colors";
import {Talk} from "../../../data/dto/input/Talk";

export class CalendarTalkMapper {
  static toCalendar(talk: Talk, color?: EventColor, actions?: CalendarEventAction[]): CalendarEvent<Talk> {
    return {
      start: new Date(),
      end: new Date(new Date().getTime() + talk.format.duration * 1000),
      title: `${talk.id} - ${talk.title}`,
      color: color,
      actions : actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
      meta: talk,
    }
  }
}
