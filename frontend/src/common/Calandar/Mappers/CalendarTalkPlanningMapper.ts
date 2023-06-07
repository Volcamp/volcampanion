import {Planning} from "../../../data/dto/input/Planning";
import {EventColor} from "calendar-utils";
import {CalendarEvent, CalendarEventAction} from "angular-calendar";
import {TalkPlanning} from "../../../data/dto/input/TalkPlanning";
import {Talk} from "../../../data/dto/input/Talk";
import {Room} from "../../../data/dto/input/Room";

export class CalendarTalkPlanningMapper {
  static toPlanning(eventTalk : CalendarEvent<Talk>,room : Room, color?: EventColor, actions?: CalendarEventAction[]): CalendarEvent<Planning> {
    return {
      start: eventTalk.start,
      end: eventTalk.end,
      title: `${(eventTalk.meta as Talk).id} - ${(eventTalk.meta as Talk).title}`,
      color: color,
      actions: actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
      meta: new TalkPlanning(room, (eventTalk.meta as Talk),eventTalk.start)
    }
  }
}
