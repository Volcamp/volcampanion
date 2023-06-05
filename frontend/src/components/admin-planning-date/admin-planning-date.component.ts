import {AfterContentInit, Component, Input} from '@angular/core';
import {Room} from "../../data/dto/input/Room";
import {Planning} from "../../data/dto/input/Planning";
import { formatDate } from 'src/common/DateFunc';

@Component({
  selector: 'app-admin-planning-date',
  templateUrl: './admin-planning-date.component.html',
  styleUrls: ['./admin-planning-date.component.sass']
})
export class AdminPlanningDateComponent implements AfterContentInit {
  @Input() date!: Date;
  @Input() plannings!: Planning[];
  rooms!: Room[];

  constructor() {
  }

  formatDate(date: Date): string {
    return formatDate(date);
  }

  ngAfterContentInit(): void {
    //rooms =
  }

  // convertPlanning(room : Room) : CalendarContaner<Planning>


}
