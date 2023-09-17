import {Injectable} from "@angular/core";
import {PlanningExternalDropEventArgs} from "../event/PlanningExternalDropEventArgs";
import {Room} from "../data/dto/input/Room";
import {CalendarEvent, CalendarEventTimesChangedEvent} from "angular-calendar";
import {Planning} from "../data/dto/input/Planning";
import {compareEqualDate} from "../common/DateFunc";
import {TalkPlanning} from "../data/dto/input/TalkPlanning";
import {Subject} from "rxjs";
import {Talk} from "../data/dto/input/Talk";
import {CalendarTalkPlanningMapper} from "../common/Calandar/Mappers/CalendarTalkPlanningMapper";
import {getColorRoom} from "../common/Calandar/RoomToColor";

@Injectable()
export class PlanningCalendarDragDropService {

  draggedAndDroppedValid(data: PlanningExternalDropEventArgs, draggedRoom: Room, draggedViewDate: Date,
                         eventsDraggedFrom: CalendarEvent<Planning>[], refresh: Subject<void>) {
    if (data.idRoom === draggedRoom.id && compareEqualDate(draggedViewDate, data.date)) {
      const index = eventsDraggedFrom.findIndex(planningEvent => {
          return planningEvent.meta?.schedule! === data.date &&
            data.idRoom === (planningEvent.meta as TalkPlanning).room?.id &&
            data.idTalk === (planningEvent.meta as TalkPlanning).talk.id
        }
      );
      eventsDraggedFrom.splice(index, 1);
      refresh.next();
    }
  }

  eventTimesChanged(eventTimesChangedEvent: CalendarEventTimesChangedEvent, events: CalendarEvent<Planning>[], refresh: Subject<void>): boolean {
    delete eventTimesChangedEvent.event.cssClass;
    if (this.validateEventTimesChanged(eventTimesChangedEvent, false, events)) {
      const {event, newStart, newEnd} = eventTimesChangedEvent;
      event.start = newStart;
      event.meta.schedule = newStart;
      event.end = newEnd;
      refresh.next();
      return true;
    }
    return false;
  }

  eventDropped(eventTimesChangedEvent: CalendarEventTimesChangedEvent, room: Room,
               events: CalendarEvent<Planning>[]): CalendarEvent<Planning>[] {
    const {event, newStart, newEnd, allDay,} = eventTimesChangedEvent;
    this.verifyAllDay(allDay, event);
    event.start = newStart;
    event.end = new Date(event.start.getTime() + (event.meta as any).talk.format.duration * 1000);
    event.meta.room = room; //TODO make all changement date, room, talk.format.duration
    event.meta.schedule = event.start;
    event.color = getColorRoom(room.name);

    events.push(event);
    return [...events];
  }


  validateEventTimesChanged = ({event, newStart, newEnd, allDay}: CalendarEventTimesChangedEvent,
                               addCssClass = true, events: CalendarEvent<Planning>[]) => {
    delete event.cssClass;

    // don't allow dragging events to the same times as other events
    const overlappingEvent = events.find((otherEvent) => {
      // @ts-ignore
      return (
        otherEvent !== event &&
        // @ts-ignore
        ((otherEvent.start < newStart && newStart < otherEvent.end) ||
          // @ts-ignore
          (otherEvent.start < newEnd && newStart < otherEvent.end))
      );
    });

    if (overlappingEvent) {
      if (addCssClass) {
        event.cssClass = 'invalid-position';
      } else {
        return false;
      }
    }
    return true;
  };

  eventDroppedFromTalk(eventCalendar: CalendarEventTimesChangedEvent, room: Room, events: CalendarEvent<Planning>[]) {
    const {event, newStart, allDay,} = eventCalendar;

    this.verifyAllDay(allDay, event);
    event.start = newStart;
    event.end = new Date(event.start.getTime() + (event.meta.talk as Talk).format.duration * 1000);

    events.push(CalendarTalkPlanningMapper.toPlanning(event, room));
    return [...events];
  }

  private verifyAllDay(allDay: boolean | undefined, event: CalendarEvent<any>) {
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
  }
}
