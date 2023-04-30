import {EventArgs} from "./EventArgs";
import {PlanningType} from "../data/dto/Planning";
import {PlanningTheme} from "../data/dto/Theme";

export class FilterPlanning {
  planningsTypes: PlanningType[] = [];
  planningsThemes: PlanningTheme[] = [];
  dates: Date[] = [];

  constructor(planningsTypes: PlanningType[], planningsThemes: PlanningTheme[], dates: Date[]) {
    this.dates = dates;
    this.planningsThemes = planningsThemes;
    this.planningsTypes = planningsTypes;
  }
}

export class EventFilterPlanning extends EventArgs {
  constructor(data: FilterPlanning) {
    super();
    this._data = data

  }

  get data(): FilterPlanning {
    return this._data;
  }

  set data(value: FilterPlanning) {
    this._data = value;
  }

  private _data: FilterPlanning;
}
