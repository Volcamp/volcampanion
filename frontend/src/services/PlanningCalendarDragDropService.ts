import {Injectable} from "@angular/core";
import {PlanningExternalDropEventArgs} from "../event/PlanningExternalDropEventArgs";
import {Room} from "../data/dto/input/Room";
import {CalendarEvent, CalendarEventTimesChangedEvent} from "angular-calendar";
import {Planning} from "../data/dto/input/Planning";
import {compareEqualDate} from "../common/DateFunc";
import {TalkPlanning} from "../data/dto/input/TalkPlanning";
import {isSameDay} from "date-fns";
import {Subject} from "rxjs";

@Injectable()
export class PlanningCalendarDragDropService {

  draggedAndDroppedValid(data: PlanningExternalDropEventArgs, draggedRoom: Room, draggedViewDate: Date,
                         eventsDraggedFrom: CalendarEvent<Planning>[], refresh: Subject<void>) {
    if (data.idRoom === draggedRoom.id && compareEqualDate(draggedViewDate, data.date)) {
      const index = eventsDraggedFrom.findIndex(planningEvent => {
          return compareEqualDate(planningEvent.meta?.schedule!, data.date) &&
            data.idRoom === (planningEvent.meta as TalkPlanning).room.id &&
            data.idTalk === (planningEvent.meta as TalkPlanning).talk.id
        }
      );
      eventsDraggedFrom.splice(index, 1);
      refresh.next();
    }
  }

  eventTimesChanged(eventTimesChangedEvent: CalendarEventTimesChangedEvent, events: CalendarEvent<Planning>[], refresh: Subject<void>): void {
    delete eventTimesChangedEvent.event.cssClass;
    if (this.validateEventTimesChanged(eventTimesChangedEvent, false, events)) {
      const {event, newStart, newEnd} = eventTimesChangedEvent;
      event.start = newStart;
      event.meta.schedule = newStart;
      event.end = newEnd;
      refresh.next();
    }
  }

  eventDropped({event, newStart, newEnd, allDay,}: CalendarEventTimesChangedEvent, room: Room,
               events: CalendarEvent<Planning>[]): CalendarEvent<Planning>[] {
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    event.start = newStart;
    event.end = new Date(event.start.getTime() + (event.meta as any).talk.format.duration * 1000);
    event.meta.room = room; //TODO make all changement date, room, talk.format.duration
    event.meta.schedule = event.start;

    events.push(event);
    return [...events];
  }


  validateEventTimesChanged = ({event, newStart, newEnd, allDay}: CalendarEventTimesChangedEvent,
                               addCssClass = true, events: CalendarEvent<Planning>[]) => {
    delete event.cssClass;
    // @ts-ignore
    const sameDay = isSameDay(newStart, newEnd);

    if (!sameDay) {
      return false;
    }

    // don't allow dragging events to the same times as other events
    const overlappingEvent = events.find((otherEvent) => {

      return (
        otherEvent !== event &&
        !otherEvent.allDay &&
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

}
