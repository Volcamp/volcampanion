import {Component, Input} from '@angular/core';
import {Planning, PlanningType} from "../../Data/DTO/Planning";
import {AppRoutes, toRoute} from "../../app/AppRoutes";
import {DataParamService} from "../../services/data-param.service";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-talks-list',
  templateUrl: './talks-list.component.html',
  styleUrls: ['./talks-list.component.sass']
})
export class TalksListComponent {

  BREAK = PlanningType.BREAK;
  DELIMITER_DAY = PlanningType.DELIMITER_DAY;
  @Input() plans: Planning[] = [];
  public constructor(private navgation: NavigationService) { }


  navigate(talkPlan: any) {
    this.navgation.goToTalk(talkPlan);
  }
}
