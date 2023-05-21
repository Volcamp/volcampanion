import {EventArgs} from "./EventArgs";
import {PlanningType} from "../data/dto/Planning";
import {PlanningTheme} from "../data/dto/Theme";

export class FilterPlanningEventArgs extends EventArgs {

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
