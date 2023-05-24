import {PlanningType} from "../data/dto/input/Planning";
import {PlanningTheme} from "../data/dto/input/Theme";
import Event from "./Event";
import {FilterVisibilityEventArgs} from "./FilterVisibilityEventArgs";

export class FilterPlanningEvent extends Event<FilterVisibilityEventArgs> {

  planningsTypes: PlanningType[] = [];
  planningsThemes: PlanningTheme[] = [];
  dates: Date[] = [];

  constructor(planningsTypes: PlanningType[], planningsThemes: PlanningTheme[], dates: Date[]) {
    super();
    this.dates = dates;
    this.planningsThemes = planningsThemes;
    this.planningsTypes = planningsTypes;
  }


}
