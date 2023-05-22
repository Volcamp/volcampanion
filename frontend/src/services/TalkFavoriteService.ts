import {AbstractTalkFavoriteService} from "./AbstractTalkFavoriteService";
import {map, Observable, of} from "rxjs";
import {RequestManager} from "../data/RequestManager";
import {EnvironmentService} from "./EnvironmentService";
import {APIRoutes} from "../data/APIRoutes";
import {Planning} from "../data/dto/Planning";
import {Injectable} from "@angular/core";

export const FAVORITE_LIST = "favoriteList"

@Injectable()
export class TalkFavoriteService implements AbstractTalkFavoriteService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  addToFavorite(idTalk: number) {
    this.requestManager.postAuthorization<string>(this.env.getApiUrl() + APIRoutes.FAVORITE_BEFORE + +idTalk.toString() + APIRoutes.FAVORITE_AFTER, idTalk.toString()).subscribe(data => {

    });
  }

  removeFromFavorite(idTalk: number): Observable<boolean> {
    return this.requestManager.deleteAuthorization<string>(this.env.getApiUrl() + APIRoutes.FAVORITE_BEFORE + idTalk.toString() + APIRoutes.FAVORITE_AFTER).pipe(
      map(data => {
        return data === idTalk.toString();
      }));
  }

  getFavorites(idConf: string): Observable<Planning[] | undefined> {
    let favorites = window.localStorage.getItem(FAVORITE_LIST);

    if (favorites == null) {
      return this.requestManager.getAuthorization<any[]>(this.env.getApiUrl() + APIRoutes.FAVORITE + APIRoutes.ID_CONF + idConf).pipe(
        map(favoritesApi => {
            window.localStorage.setItem(FAVORITE_LIST, JSON.stringify(favoritesApi));
            return favoritesApi;
          }
        ));
    } else {
      return of(JSON.parse(favorites))
    }

  }
}
