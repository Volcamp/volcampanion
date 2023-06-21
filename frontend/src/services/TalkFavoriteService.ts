import {AbstractTalkFavoriteService} from "./abstract/AbstractTalkFavoriteService";
import {catchError, map, Observable, of} from "rxjs";
import {RequestManager} from "../data/RequestManager";
import {EnvironmentService} from "./EnvironmentService";
import {APIRoutes} from "../data/APIRoutes";
import {Planning, PlanningType} from "../data/dto/input/Planning";
import {Injectable} from "@angular/core";
import {BreakMapper} from "../data/dto/input/mappers/BreakMapper";
import {TalkMapper} from "../data/dto/input/mappers/TalkMapper";
import {PlanningMapper} from "../data/dto/output/mappers/PlanningMapper";
import {formatPlanning} from "../common/FormatPlannings/FormatPlannings";
import {DividerMapper} from "../data/dto/input/mappers/DividerMapper";
import {compareSchedule} from "../common/CompareTalkPlan";

export const FAVORITE_LIST = "favoriteList"

@Injectable()
export class TalkFavoriteService implements AbstractTalkFavoriteService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  addToFavorite(planning: Planning): Observable<boolean> {
    // @ts-ignore
    return this.requestManager.post<string>(this.env.getApiUrl() + APIRoutes.FAVORITE, PlanningMapper.toDTO(planning)).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      }));
  }

  removeFromFavorite(planning: Planning): Observable<boolean> {
    let date: Date = new Date(planning.schedule.getTime() - (planning.schedule.getTimezoneOffset() * 60000))
    return this.requestManager.delete<string>(this.env.getApiUrl() + APIRoutes.FAVORITE +
      APIRoutes.FAVORITE_DATE_FIRST_PARAM + date.toJSON()
      // @ts-ignore
      + APIRoutes.FAVORITE_ROOM_PARAM + planning?.room.id
      // @ts-ignore
      + APIRoutes.FAVORITE_TALK_PARAM + planning?.talk.id).pipe(
      map(() => true),
      catchError(() => {
          return of(false)
        }
      ));
  }

  getFavorites(idConf?: string, fromApi: boolean = false): Observable<Planning[]> {
    let favorites = window.localStorage.getItem(FAVORITE_LIST);
    if (favorites == null || fromApi) {
      return this.requestManager.get<any[]>(this.env.getApiUrl() + APIRoutes.FAVORITE + APIRoutes.ID_CONF + idConf).pipe(
        map(favoritesApi => {
            const finalData = this.dataToPlannings(favoritesApi).sort(compareSchedule);
            window.localStorage.setItem(FAVORITE_LIST, JSON.stringify(finalData));
            return formatPlanning(finalData);
          }
        ));
    } else {
      return of(formatPlanning(this.dataToPlannings(JSON.parse(favorites).sort(compareSchedule))));
    }

  }

  private dataToPlannings(favoritesApi: any[]) {
    const finalData: Planning[] = [];
    for (let planning of favoritesApi) {
      switch (planning.talk.format.type) {
        case PlanningType.DELIMITER_DAY:
          finalData.push(DividerMapper.toModel(planning));
          break;
        case PlanningType.BREAK:
          finalData.push(BreakMapper.toModel(planning));
          break;
        default:
          finalData.push(TalkMapper.toModel(planning));
          break;

      }
    }
    return finalData;
  }
}
