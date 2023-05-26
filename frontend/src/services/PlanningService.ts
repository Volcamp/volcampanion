import {Planning, PlanningType} from "../data/dto/input/Planning";
import {BreakMapper} from "../data/dto/input/mappers/BreakMapper";
import {TalkMapper} from "../data/dto/input/mappers/TalkMapper";
import {APIRoutes} from "../data/APIRoutes";
import {RequestManager} from "../data/RequestManager";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {EnvironmentService} from "./EnvironmentService";
import {TalkPlanning} from "../data/dto/input/TalkPlanning";
import {AbstractPlanningService} from "./abstract/AbstractPlanningService";
import {DividerPlanning} from "../data/dto/input/DividerPlanning";


@Injectable()
export class PlanningService implements AbstractPlanningService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getPlannings(idConf: string): Observable<Planning[]> {
    return this.requestManager.get<any>(this.env.getApiUrl() + APIRoutes.PLANNING + "?idConf=" + idConf).pipe(
      map(data => {
        const finalData: Planning[] = [];

        //Handle first day for first item
        if (data?.length > 0) {
          this.addDayDelimiterForDate(data[0].schedule, finalData);
        }
        let previousSchedule = new Date(data[0].schedule);
        let currentSchedule;
        for (let planning of data) {
          currentSchedule = new Date(planning.schedule);

          if(previousSchedule.getDay() !== currentSchedule.getDay()){
            this.addDayDelimiterForDate(planning.schedule, finalData);
            previousSchedule = currentSchedule;
          }

          switch (planning.talk.format.type) {
            case PlanningType.BREAK:
              finalData.push(BreakMapper.toModel(planning));
              break;
            default:
              finalData.push(TalkMapper.toModel(planning));
              break;
          }

        }
        return finalData;
      })
    );
  }

  private addDayDelimiterForDate(eventDate: string, finalData: Planning[]) {
    let date = new Date(eventDate);
    date.setHours(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    date.setMinutes(0);
    finalData.push(new DividerPlanning(new Date(date)));
  }

  getPlanningById(id: string): Observable<TalkPlanning> {
    return this.requestManager.get<TalkPlanning[]>(this.env.getApiUrl() + APIRoutes.TALK + id).pipe(
      map(data => {
        return TalkMapper.toModel(data[0]);

      }));
  }
}
