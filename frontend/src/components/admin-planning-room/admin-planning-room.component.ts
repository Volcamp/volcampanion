import {Component, Input} from '@angular/core';
import {CalendarEventTimesChangedEvent, CalendarView} from "angular-calendar";
import {CalendarEventDataContainer} from "../../common/Calandar/CalendarEventDataContainer";
import {addHours, startOfDay} from "date-fns";
import {Subject} from "rxjs";
import {colors} from "../../common/Calandar/Colors";
import {HOUR_DEFAULT_PROPERTIES, HourProperties} from "../../common/Calandar/HourProperties";
import {Room} from "../../data/dto/input/Room";
import {formatDate} from "../../common/DateFunc";
import {Planning} from "../../data/dto/input/Planning";

@Component({
  selector: 'app-admin-planning-room',
  templateUrl: './admin-planning-room.component.html',
  styleUrls: ['./admin-planning-room.component.sass']
})
export class AdminPlanningRoomComponent {
  view: CalendarView = CalendarView.Day;
  @Input() hourProperties: HourProperties = HOUR_DEFAULT_PROPERTIES;
  @Input() viewDate!: Date;
  @Input() room!: Room;
  @Input() events!: CalendarEventDataContainer<Planning>[];
  @Input() hourDuration: number = 60;

  refresh = new Subject<void>();

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd,
                    }: CalendarEventTimesChangedEvent): void {
    console.log(event)
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }


  formatDate(viewDate: Date): string {
    return formatDate(viewDate);
  }
}
