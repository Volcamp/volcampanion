import {Component, Input} from '@angular/core';
import {Room} from "../../data/dto/input/Room";
import {Planning, PlanningType} from "../../data/dto/input/Planning";
import {formatDate} from 'src/common/DateFunc';
import {AbstractRoomService} from "../../services/abstract/AbstractRoomService";
import {CalendarEventDataContainer} from "../../common/Calandar/CalendarEventDataContainer";
import {CalendarPlanningMapper} from "../../common/Calandar/CalendarPlanningMapper";
import {PlanningsInitService} from "../../services/plannings-init.service";
import {PlanningsInitEventArgs} from "../../event/PlanningsInitEventArgs";

@Component({
  selector: 'app-admin-planning-date',
  templateUrl: './admin-planning-date.component.html',
  styleUrls: ['./admin-planning-date.component.sass']
})
export class AdminPlanningDateComponent {
  @Input() date!: Date; //FIXME date is not type date
  @Input() confId!: string;
  @Input() plannings: Planning[] = [];
  rooms: Room[] = [];

  constructor(private dataService: AbstractRoomService, planningsInitService: PlanningsInitService) {
    planningsInitService.eventEmitter.on((data: PlanningsInitEventArgs) => {
      this.init(data.plannings)
    })
  }

  formatDate(date: Date): string {
    return formatDate(new Date(date));
  }

  init(plannings: Planning[]): void {
    this.plannings = plannings;
    this.dataService.getRoom(this.confId).subscribe(data => {
      this.rooms = data;
    });

    this.plannings.forEach(planning => {  // <---- Assure that all planning have the same date that passed in the param
      planning.schedule.setDate(new Date(this.date).getDate());
    });
  }

  convertPlanning(room: Room): CalendarEventDataContainer<Planning>[] {
    return this.plannings.filter(planning => {
      if (planning.getType() !== PlanningType.DELIMITER_DAY && planning.getType() !== PlanningType.BREAK) {
        console.log(planning)
        return room.id === (planning as any).room.id;
      }
      return false;
    }).map(planning => {
      return CalendarPlanningMapper.toCalendar(planning);
    });
  }

}
