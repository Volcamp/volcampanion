import {PlanningType} from "./Plan";

export interface Format {
  id: number;
  name: string;
  type: PlanningType;
  description: string;
  durationUnit: string;
  durationTime: number;
  duration: number;
}
