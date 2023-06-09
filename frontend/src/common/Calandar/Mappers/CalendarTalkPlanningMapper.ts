import {Planning} from "../../../data/dto/input/Planning";
import {EventColor} from "calendar-utils";
import {CalendarEvent, CalendarEventAction} from "angular-calendar";
import {TalkPlanning} from "../../../data/dto/input/TalkPlanning";
import {Talk} from "../../../data/dto/input/Talk";
import {Room} from "../../../data/dto/input/Room";
import {CalendarTalk} from "../CalendarTalk";
import {getColorRoom} from "../RoomToColor";

export class CalendarTalkPlanningMapper {
  static toPlanning(eventTalk : CalendarEvent<CalendarTalk>,room : Room, color?: EventColor, actions?: CalendarEventAction[]): CalendarEvent<Planning> {
    return {
      start: eventTalk.start,
      end: eventTalk.end,
      title: `${(eventTalk.meta?.talk as Talk).id} - ${(eventTalk.meta?.talk as Talk).title}`,
      color: color ?? getColorRoom(room.name),
      actions: actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
      meta: new TalkPlanning(room, (eventTalk.meta?.talk as Talk),eventTalk.start)
    }
  }
}
