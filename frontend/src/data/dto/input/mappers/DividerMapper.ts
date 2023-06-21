import {DividerPlanning} from "../DividerPlanning";

export class DividerMapper{
  static toModel(data: any): DividerPlanning {
    return new DividerPlanning(new Date(data.schedule))
  }
}
