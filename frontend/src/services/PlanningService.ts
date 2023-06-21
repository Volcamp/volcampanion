import {Planning, PlanningType} from "../data/dto/input/Planning";
import {BreakMapper} from "../data/dto/input/mappers/BreakMapper";
import {TalkMapper} from "../data/dto/input/mappers/TalkMapper";
import {APIRoutes} from "../data/APIRoutes";
import {RequestManager} from "../data/RequestManager";
import {Injectable} from "@angular/core";
import {catchError, map, Observable, of} from "rxjs";
import {EnvironmentService} from "./EnvironmentService";
import {TalkPlanning} from "../data/dto/input/TalkPlanning";
import {AbstractPlanningService} from "./abstract/AbstractPlanningService";
import {DividerPlanning} from "../data/dto/input/DividerPlanning";
import {CreateTalk} from "../data/dto/output/CreateTalk";
import {HttpResponse} from "@angular/common/http";
import {CreatePlanning} from "../data/dto/output/CreatePlanning";
import {formatPlanning} from "../common/FormatPlannings/FormatPlannings";


@Injectable()
export class PlanningService implements AbstractPlanningService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getPlannings(idConf: string): Observable<Planning[]> {
    return this.requestManager.get<any>(this.env.getApiUrl() + APIRoutes.PLANNING + "?idConf=" + idConf).pipe(
      map(data => {
        return formatPlanning(data);
      })
    );
  }

  getPlanningById(id: string): Observable<TalkPlanning> {
    return this.requestManager.get<TalkPlanning[]>(this.env.getApiUrl() + APIRoutes.TALK + id).pipe(
      map(data => {
        return TalkMapper.toModel(data[0]);

      }));
  }

  clearAddPlanning(plannings: CreatePlanning[]): Observable<boolean> {
    return this.requestManager.post<HttpResponse<CreatePlanning>>(this.env.getApiUrl() + APIRoutes.PLANNING + APIRoutes.PLANNING_ALL, plannings).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }


}

