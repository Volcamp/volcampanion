import {EventArgs} from "./EventArgs";
import {Planning} from "../data/dto/input/Planning";

export class PlanningsInitEventArgs extends EventArgs {
  constructor(data: Planning[]) {
    super();
    this._plannings = data
  }

  get plannings(): Planning[] {
    return this._plannings;
  }

  private _plannings: Planning[];

}
