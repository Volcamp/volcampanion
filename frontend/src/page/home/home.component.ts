import {Component} from '@angular/core';
import {AbstractPlanningService} from "../../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {VMListPlanning} from "../../vm/VMListPlanning";
import {FilterPlanningsService} from "../../services/FilterPlanningsService";
import {AbstractTalkFavoriteService} from "../../services/abstract/AbstractTalkFavoriteService";
import {Planning, PlanningType} from "../../data/dto/input/Planning";
import {compareEqualDateAndTime} from "../../common/DateFunc";
import {roomPosition} from "../../common/RoomPosition";
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  vm: VMListPlanning;


  constructor(dataService: AbstractPlanningService, favoriteService: AbstractTalkFavoriteService, confService: AbstractConferenceService, filterPlannings: FilterPlanningsService) {
    this.vm = new VMListPlanning(dataService, confService, filterPlannings);
  }


  ngOnInit(): void {
    this.vm.init()
  }

  getByDate(date: Date): Planning[] {
    const plannings = this.vm.plannings.filter(planning => {
      return compareEqualDateAndTime(planning.schedule, date);
    });
    if (plannings.some(planning => {
      if(planning !== undefined){
        return planning.getType() !== PlanningType.DELIMITER_DAY && plannings[0].getType() !== PlanningType.BREAK;
      }
      return true
    })) {
      const planningsOrder: Planning[] = [];
      for (let i = 0; i < 4; i++) {
        // @ts-ignore
        planningsOrder.push(undefined); // <-|----- Be careful the planning can contain undefined
      }
      plannings.forEach(planning => {
        planningsOrder.splice(roomPosition((planning as TalkPlanning).room.name), 0, planning);
      });
      return planningsOrder;
    } else {
      return plannings;
    }


  }
}
