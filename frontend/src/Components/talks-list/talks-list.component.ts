import {Component, Input, OnInit} from '@angular/core';
import {Plan, PlanningType} from "../../Data/DTO/Plan";
import {compareSchedule} from "../../GeneralVolcamp/CompareTalkPlan";

@Component({
  selector: 'app-talks-list',
  templateUrl: './talks-list.component.html',
  styleUrls: ['./talks-list.component.sass']
})
export class TalksListComponent implements OnInit {

  // Link enum values to local variables to be able to bind them in the view
  BREAK = PlanningType.BREAK;
  DELIMITER_DAY = PlanningType.DELIMITER_DAY;

  @Input() plans: Plan[] = [];

  ngOnInit(): void {
    // FIXME can be removed when you will use the API
    this.plans.sort(compareSchedule)
  }

}
