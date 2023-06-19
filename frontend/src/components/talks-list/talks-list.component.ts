import {Component, Input} from '@angular/core';
import {Planning, PlanningType} from "../../data/dto/input/Planning";
import {NavigationService} from "../../services/NavigationService";

@Component({
  selector: 'app-talks-list',
  templateUrl: './talks-list.component.html',
  styleUrls: ['./talks-list.component.sass']
})
export class TalksListComponent {

  BREAK = PlanningType.BREAK;
  DELIMITER_DAY = PlanningType.DELIMITER_DAY;
  @Input() plannings: Planning[] = [];
  @Input() noContentDisplay = false;

  public constructor(private navigation: NavigationService) {
  }

  navigate(talkPlan: any) {
    this.navigation.goToTalk(talkPlan);
  }


}
