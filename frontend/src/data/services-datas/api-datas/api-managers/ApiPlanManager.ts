import {Planning, PlanningType} from "../../../dto/Planning";
import {BreakMapper} from "../mappers/BreakMapper";
import {TalkMapper} from "../mappers/TalkMapper";
import {ApiLinks} from "../api-general/ApiLinks";
import {compareSchedule} from "../../../../general-volcamp/CompareTalkPlan";
import {RequestManager} from "../api-general/RequestManager";
import {Injectable} from "@angular/core";
import {LinkComposerService} from "../api-general/LinkComposer.service";
import {map, Observable} from "rxjs";
import {EnvironmentService} from "../../../environments/environment.service";
import {TalkPlanning} from "../../../dto/TalkPlanning";
import {DividerPlanning} from "../../../dto/DividerPlanning";


@Injectable()
export class ApiPlanManager {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getPlannings(idConf: string): Observable<Planning[]> {
    return this.requestManager.get<any>(LinkComposerService.constructEndPointConf(this.env.apiUrl, ApiLinks.PLANNING, idConf)).pipe(
      map(data => {
        const finalData: Planning[] = [];
        data.sort(compareSchedule);
        let lastDate = null;

        for (let plan of data) {
          let actualPlan;
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
      })
    );
  }

  getPlanningById(id: string): Observable<TalkPlanning> {
    return this.requestManager.get<TalkPlanning[]>(LinkComposerService.constructEndPointId(this.env.apiUrl, ApiLinks.TALK, id)).pipe(
      map(data => {
        return TalkMapper.toModel(data[0]);

      }));
  }
}
