import {AbstractTalkFavoriteService} from "./abstract/AbstractTalkFavoriteService";
import {map, Observable, of} from "rxjs";
import {RequestManager} from "../data/RequestManager";
import {EnvironmentService} from "./EnvironmentService";
import {APIRoutes} from "../data/APIRoutes";
import {Planning, PlanningType} from "../data/dto/input/Planning";
import {Injectable} from "@angular/core";
import {BreakMapper} from "../data/dto/input/mappers/BreakMapper";
import {TalkMapper} from "../data/dto/input/mappers/TalkMapper";
import {PlanningMapper} from "../data/dto/output/mappers/PlanningMapper";

export const FAVORITE_LIST = "favoriteList"

@Injectable()
export class TalkFavoriteService implements AbstractTalkFavoriteService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  addToFavorite(planning: Planning) {
    // @ts-ignore
    this.requestManager.post<string>(this.env.getApiUrl() + APIRoutes.FAVORITE, PlanningMapper.toDTO(planning)).subscribe(data => {

    });
  }

  removeFromFavorite(planning: Planning): Observable<boolean> {
    let date : Date = new Date(planning.schedule.getTime() - (planning.schedule.getTimezoneOffset() * 60000))
    // @ts-ignore
    this.requestManager.delete<string>(this.env.getApiUrl() + APIRoutes.FAVORITE + "?date="+date.toJSON()+"&idRoom="+planning?.room.id+"&idTalk="+planning?.talk.id).subscribe(); // TODO verify that the delete happened
    return of(true);
  }

  getFavorites(idConf?: string, fromApi: boolean = false): Observable<Planning[]> {
    let favorites = window.localStorage.getItem(FAVORITE_LIST);
    if (favorites == null || fromApi) {
      return this.requestManager.get<any[]>(this.env.getApiUrl() + APIRoutes.FAVORITE + APIRoutes.ID_CONF + idConf).pipe(
        map(favoritesApi => {
            const finalData = this.dataToPlannings(favoritesApi);
            window.localStorage.setItem(FAVORITE_LIST, JSON.stringify(finalData));
            return finalData;
          }
        ));
    } else {
      return of(this.dataToPlannings(JSON.parse(favorites)))
    }

  }

  private dataToPlannings(favoritesApi: any[]) {
    const finalData: Planning[] = [];
    for (let planning of favoritesApi) {
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
  }
}
