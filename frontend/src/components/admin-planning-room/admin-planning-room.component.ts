import {AfterContentInit, Component, Input} from '@angular/core';
import {CalendarEvent, CalendarEventTimesChangedEvent, CalendarView} from "angular-calendar";
import {Observable, of, Subject} from "rxjs";
import {HOUR_DEFAULT_PROPERTIES, HourProperties} from "../../common/Calandar/HourProperties";
import {Room} from "../../data/dto/input/Room";
import {compareEqualDate, formatDate} from "../../common/DateFunc";
import {Planning} from "../../data/dto/input/Planning";
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";
import {PlanningExternalDropService} from "../../services/PlanningExternalDropService";
import {PlanningExternalDropEventArgs} from "../../event/PlanningExternalDropEventArgs";
import {PlanningCalendarDragDropService} from "../../services/PlanningCalendarDragDropService";
import {SnackBarService} from "../../services/SnackBarService";


@Component({
  selector: 'app-admin-planning-room',
  templateUrl: './admin-planning-room.component.html',
  styleUrls: ['./admin-planning-room.component.sass']
})
export class AdminPlanningRoomComponent implements AfterContentInit {
  view: CalendarView = CalendarView.Day;
  @Input() hourProperties: HourProperties = HOUR_DEFAULT_PROPERTIES;
  @Input() viewDate!: Date;
  @Input() room!: Room;
  @Input() events: Observable<CalendarEvent<Planning>[]> = of([]);
  eventsDefault: CalendarEvent<Planning>[] = [];

  @Input() hourDuration: number = 60;
  @Input() minEventDuration: number = 15;

  refresh = new Subject<void>();

  constructor(private planningExternalDropService: PlanningExternalDropService,
              private planningCalendarDragDropService: PlanningCalendarDragDropService, private snackService: SnackBarService) {
    this.planningExternalDropService.eventEmitter.on((data: PlanningExternalDropEventArgs) => {
      planningCalendarDragDropService.draggedAndDroppedValid(data, this.room, this.viewDate, this.eventsDefault, this.refresh);
    });
  }

  ngAfterContentInit() {
    this.events.subscribe(events => this.eventsDefault = events)
  }

  eventManger(eventTimesChangedEvent: CalendarEventTimesChangedEvent): void {
    const {event} = eventTimesChangedEvent;
    eventTimesChangedEvent.newEnd = new Date( eventTimesChangedEvent.newStart.getTime() + (event.meta as any).talk.format.duration * 1000);
    if (event.meta.room === undefined && event.meta.schedule === undefined) {
      this.eventDropped(eventTimesChangedEvent, true);
    } else if ((event.meta as TalkPlanning).room.id === this.room.id && compareEqualDate(event.meta.schedule, this.viewDate)) {
      this.eventTimesChanged(eventTimesChangedEvent);
    } else {
      this.eventDropped(eventTimesChangedEvent)
    }
  }

  formatDate(viewDate: Date): string {
    return formatDate(viewDate);
  }

  validateEventTimesChanged = (calendarEventTimesChangedEvent: CalendarEventTimesChangedEvent, addCssClass = true) => {
    return this.planningCalendarDragDropService.validateEventTimesChanged(calendarEventTimesChangedEvent, addCssClass, this.eventsDefault);
  };

  eventTimesChanged(eventTimesChangedEvent: CalendarEventTimesChangedEvent): void {
    if (!this.planningCalendarDragDropService.eventTimesChanged(eventTimesChangedEvent, this.eventsDefault, this.refresh)) {
      this.reserved();
    }
  }

  eventDropped(calendarEventTimesChangedEvent: CalendarEventTimesChangedEvent, talkList: boolean = false): void {
    if (this.validateEventTimesChanged(calendarEventTimesChangedEvent, false)) {
      if (talkList) {
         this.planningExternalDropService.eventEmitter.emit(new PlanningExternalDropEventArgs(
          calendarEventTimesChangedEvent.event.meta.talk.id,
          -1,
          new Date()))
        this.eventsDefault = this.planningCalendarDragDropService.eventDroppedFromTalk(calendarEventTimesChangedEvent, this.room, this.eventsDefault);
      } else {
        this.planningExternalDropService.eventEmitter.emit(new PlanningExternalDropEventArgs(
          calendarEventTimesChangedEvent.event.meta.talk.id,
          calendarEventTimesChangedEvent.event.meta.room.id,
          calendarEventTimesChangedEvent.event.meta.schedule,));

        this.eventsDefault = this.planningCalendarDragDropService.eventDropped(calendarEventTimesChangedEvent, this.room, this.eventsDefault);
      }
    } else {
      this.reserved();
    }

  }

  private reserved() {
    this.snackService.open("Ce Créneau est déjà reservé !", "Fermer");
  }
}
