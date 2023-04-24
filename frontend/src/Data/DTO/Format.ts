import {PlanningType} from "./Planning";

export interface Format {
  id: number;
  name: string;
  type: PlanningType;
  description: string;
  durationUnit: string;
  durationTime: number;
  duration: number;
}
