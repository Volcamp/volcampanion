import {AfterContentInit, Component, Input} from '@angular/core';
import {Planning, PlanningType} from "../../data/dto/input/Planning";
import {NavigationService} from "../../services/NavigationService";
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";

@Component({
  selector: 'app-talks-list',
  templateUrl: './talks-list.component.html',
  styleUrls: ['./talks-list.component.sass']
})
export class TalksListComponent implements AfterContentInit {

  BREAK = PlanningType.BREAK;
  DELIMITER_DAY = PlanningType.DELIMITER_DAY;
  @Input() plannings: Planning[] = [];
  @Input() noContentDisplay = false;
  nbItem: number = 0;

  public constructor(private navigation: NavigationService) {
  }

  navigate(talkPlan: any) {
    this.navigation.goToTalk(talkPlan);
  }

  ngAfterContentInit(): void {
    this.nbItem = this.plannings.filter(planning => {
      return planning !== undefined
    }).length;
  }

  getType(planning: Planning) {
    if (this.hasGetType(planning)) {
      return planning.getType();
    } else {
      // @ts-ignore
      if (planning['talk'] === undefined) {
        return PlanningType.DELIMITER_DAY;
      }
      return (planning as TalkPlanning)?.talk.format.type;
    }
  }

  hasGetType(obj: any): boolean {
    return typeof obj.getType === 'function';
  }
}
