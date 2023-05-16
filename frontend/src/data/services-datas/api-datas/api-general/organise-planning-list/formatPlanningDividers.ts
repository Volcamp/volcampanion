import {OrganisePlanningsService} from "./organise-plannings.service";
import {Injectable} from "@angular/core";
import {Planning, PlanningType} from "../../../../dto/Planning";
import {compareSchedule} from "../../../../../general-volcamp/CompareTalkPlan";
import {BreakMapper} from "../../mappers/BreakMapper";
import {TalkMapper} from "../../mappers/TalkMapper";
import {DividerPlanning} from "../../../../dto/DividerPlanning";

@Injectable()
export class FormatPlanningDividers implements OrganisePlanningsService{
  organise(plannings: Planning[]): Planning[] {
    const finalData: Planning[] = [];
    plannings.sort(compareSchedule);
    let lastDate = null;

    for (let plan of plannings) {
      let actualPlan;
      // @ts-ignore
      if (plan.talk.format.type === PlanningType.BREAK) {
        actualPlan = BreakMapper.toModel(plan);
      } else {
        actualPlan = TalkMapper.toModel(plan);
      }
      finalData.push(actualPlan);
      if (lastDate == null || lastDate.getDate() != actualPlan.schedule.getDate()) {
        lastDate = new Date(actualPlan.schedule);
        lastDate.setHours(0);
        lastDate.setSeconds(0);
        lastDate.setMilliseconds(0);
        lastDate.setMinutes(0);
        finalData.push(new DividerPlanning(new Date(lastDate)));
      }
    }

    return finalData;
  }

}
