import {Component, Input, OnInit} from '@angular/core';
import {Planning, PlanningType} from "../../Data/DTO/Planning";
import {compareSchedule} from "../../GeneralVolcamp/CompareTalkPlan";

@Component({
  selector: 'app-talks-list',
  templateUrl: './talks-list.component.html',
  styleUrls: ['./talks-list.component.sass']
})
export class TalksListComponent   {

  // Link enum values to local variables to be able to bind them in the view
  BREAK = PlanningType.BREAK;
  DELIMITER_DAY = PlanningType.DELIMITER_DAY;

  @Input() plans: Planning[] = [];


}
