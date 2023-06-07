import {AfterContentInit, Component, Input} from '@angular/core';
import {Talk} from "../../data/dto/input/Talk";
import {CalendarEvent} from "angular-calendar";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-admin-planning-list-talk',
  templateUrl: './admin-planning-list-talk.component.html',
  styleUrls: ['./admin-planning-list-talk.component.sass']
})
export class AdminPlanningListTalkComponent implements AfterContentInit {
  @Input() events: Observable<CalendarEvent<Talk>[]> = of([]);
  eventsDefault: CalendarEvent<Talk>[] = [];

  constructor() {

  }

  drop(event: CalendarEvent) {
    console.log("hy");
  }

  ngAfterContentInit(): void {
    this.events.subscribe(events => this.eventsDefault = events)
  }

}
