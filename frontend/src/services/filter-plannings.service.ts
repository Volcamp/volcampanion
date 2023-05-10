import {Injectable} from '@angular/core';
import {Planning, PlanningType} from "../data/dto/Planning";
import {compareEqualDate} from "../general-volcamp/DateFunc";
import {TalkPlanning} from "../data/dto/TalkPlanning";
import {EventEmitter} from "../event/EventEmitter";
import {FilterPlanning} from "../event/EventFilterPlanning";

@Injectable({
  providedIn: 'root'
})
export class FilterPlanningsService {
  eventEmitter = new EventEmitter();

  constructor() {
  }

  filterCheck(plan: Planning, filter: FilterPlanning): boolean {

    let typeBool = true;
    let themeBool = true;
    let dateBool = filter.dates.length === 0 || filter.dates.some(date => compareEqualDate(date, plan.schedule))
    if (plan.getType() != PlanningType.BREAK && plan.getType() != PlanningType.DELIMITER_DAY) {
      const planningTalk = plan as TalkPlanning;
      typeBool = filter.planningsTypes.length === 0 || filter.planningsTypes.some(type => type === planningTalk.talk.format.type)
      themeBool = filter.planningsThemes.length === 0 || filter.planningsThemes.some(theme => {
        return theme === planningTalk.talk.theme.name
      })
    }else if(plan.getType() === PlanningType.BREAK){
       typeBool = false;
    }
    return typeBool && themeBool && dateBool

  }

  filter(plannings: Planning[], filter: FilterPlanning): Planning[] {

    return plannings.filter(plan => {
      return this.filterCheck(plan, filter)
    });
  }


}
