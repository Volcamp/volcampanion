import {Component, Input} from '@angular/core';
import {Room} from "../../data/dto/input/Room";
import {Planning, PlanningType} from "../../data/dto/input/Planning";
import {formatDate} from 'src/common/DateFunc';
import {AbstractRoomService} from "../../services/abstract/AbstractRoomService";
import {CalendarPlanningMapper} from "../../common/Calandar/Mappers/CalendarPlanningMapper";
import {map, Observable} from "rxjs";
import {CalendarEvent} from "angular-calendar";

@Component({
  selector: 'app-admin-planning-date',
  templateUrl: './admin-planning-date.component.html',
  styleUrls: ['./admin-planning-date.component.sass']
})
export class AdminPlanningDateComponent {
  @Input() date!: Date;
  @Input() confId!: string;
  @Input() plannings!: Observable<Planning[]>;
  rooms: Room[] = [];

  constructor(private dataService: AbstractRoomService) {
    this.dataService.getRoom(this.confId).subscribe(data => {
      this.rooms = data;
    });
  }

  formatDate(date: Date): string {
    return formatDate(date);
  }

  convertPlanning(room: Room): Observable<CalendarEvent<Planning>[]> {
    return this.plannings.pipe(
      map(plannings =>
        plannings.filter(planning => {
          if (planning.getType() !== PlanningType.DELIMITER_DAY && planning.getType() !== PlanningType.BREAK) {
            return room.id === (planning as any).room.id;
          }
          return false;
        }).map(planning => CalendarPlanningMapper.toCalendar(planning))
      )
    );
  }
}
