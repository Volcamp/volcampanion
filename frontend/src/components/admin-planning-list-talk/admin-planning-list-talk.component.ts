import {AfterContentInit, Component, Input} from '@angular/core';
import {CalendarEvent} from "angular-calendar";
import {Observable, of} from "rxjs";
import {CalendarTalk} from "../../common/Calandar/CalendarTalk";
import {PlanningExternalDropEventArgs} from "../../event/PlanningExternalDropEventArgs";
import {PlanningExternalDropService} from "../../services/PlanningExternalDropService";

@Component({
  selector: 'app-admin-planning-list-talk',
  templateUrl: './admin-planning-list-talk.component.html',
  styleUrls: ['./admin-planning-list-talk.component.sass']
})
export class AdminPlanningListTalkComponent implements AfterContentInit {
  @Input() events: Observable<CalendarEvent<CalendarTalk>[]> = of([]);
  eventsDefault: CalendarEvent<CalendarTalk>[] = [];

  constructor(private planningExternalDropService: PlanningExternalDropService) {
    this.planningExternalDropService.eventEmitter.on((data: PlanningExternalDropEventArgs) => {
      if (data.idRoom === -1) {
        const calendarTalk: CalendarEvent<CalendarTalk> | undefined = this.eventsDefault.find(calendarTalk => {
          return calendarTalk.meta?.talk.id === data.idTalk;
        });

        if (calendarTalk !== undefined)
          if (calendarTalk.meta?.occurrence !== undefined) {
            calendarTalk.meta.occurrence++;
          }
      }
    });
  }

  drop(event: CalendarEvent) {
    if (event.meta.occurrence === undefined) {
      const calendarTalk: CalendarEvent<CalendarTalk> | undefined = this.eventsDefault.find(calendarTalk => {
        return calendarTalk.meta?.talk.id === event.meta.talk.id;
      });
      if (calendarTalk !== undefined)
        if (calendarTalk.meta?.occurrence !== undefined) {
          this.planningExternalDropService.eventEmitter.emit(new PlanningExternalDropEventArgs(
            event.meta.talk.id,
            event.meta.room.id,
            event.meta.schedule));
          calendarTalk.meta.occurrence--;
        }
    } else {
      return;
    }

  }

  ngAfterContentInit(): void {
    this.events.subscribe(events => {
      this.eventsDefault = events
    })
  }

}
