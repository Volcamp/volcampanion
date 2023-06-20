import {Injectable} from '@angular/core';
import {Planning, PlanningType} from "../data/dto/input/Planning";
import {compareEqualDate} from "../common/DateFunc";
import {TalkPlanning} from "../data/dto/input/TalkPlanning";
import {EventEmitter} from "../event/EventEmitter";
import {FilterPlanningEventArgs} from "../event/FilterPlanningEventArgs";
import {FilterPlanningEvent} from "../event/FilterPlanningEvent";

@Injectable({
  providedIn: 'root'
})
export class FilterPlanningsService {
  eventEmitter = new EventEmitter<FilterPlanningEvent>(FilterPlanningEvent);

  constructor() {
  }

  filterCheck(planning: Planning, filter: FilterPlanningEventArgs): boolean {
    let typeBool = true;
    let themeBool = true;
    let dateBool = filter.dates.length === 0 || filter.dates.some(date => compareEqualDate(date, planning.schedule))

    if (planning.getType() === PlanningType.DELIMITER_DAY) {
      return dateBool;
    } else if (planning.getType() === PlanningType.BREAK) {
      return dateBool;
    } else {
      const planningTalk = planning as TalkPlanning;
      typeBool = filter.planningsTypes.length === 0 || filter.planningsTypes.some(type => type === planningTalk.talk.format.type)
      themeBool = filter.planningsThemes.length === 0 || filter.planningsThemes.some(theme => {
        return theme === planningTalk.talk.theme.name
      })
      return typeBool && themeBool && dateBool
    }
  }

  filter(plannings: Planning[], filter: FilterPlanningEventArgs): Planning[] {

    return plannings.filter(planning => {
      return this.filterCheck(planning, filter)
    });
  }


}
