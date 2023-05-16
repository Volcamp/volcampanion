import {EnvironmentService} from "../../../environments/environment.service";
import {RequestManager} from "../api-general/RequestManager";
import {LinkComposerService} from "../api-general/LinkComposer.service";
import {ApiLinks} from "../api-general/ApiLinks";
import {map, Observable} from "rxjs";
import {OrganisePlanningsService} from "../api-general/organise-planning-list/organise-plannings.service";
import {Planning} from "../../../dto/Planning";
import {Injectable} from "@angular/core";

@Injectable()
export class ApiFavoriteManager {
  constructor(private env: EnvironmentService, private requestManager: RequestManager, private organiser: OrganisePlanningsService) {
  }

  addToFavorite(idTalk: number): Observable<boolean> {
    return this.requestManager.post<string>(LinkComposerService.constructEndPointFavorite(this.env.apiUrl, ApiLinks.FAVORITE_BEFORE, ApiLinks.FAVORITE_AFTER, idTalk.toString()), idTalk).pipe(
      map(data => {
        return data === idTalk.toString();

      }));
  }

  removeFromFavorite(idTalk: number): Observable<boolean> {
    return this.requestManager.delete<string>(LinkComposerService.constructEndPointFavorite(this.env.apiUrl, ApiLinks.FAVORITE_BEFORE, ApiLinks.FAVORITE_AFTER, idTalk.toString())).pipe(
      map(data => {
        return data === idTalk.toString();

      }));
  }

  getFavorites(idConf: string): Observable<Planning[]> {
    return this.requestManager.get<any>(LinkComposerService.constructEndPointConf(this.env.apiUrl, ApiLinks.FAVORITE, idConf)).pipe(
      map(data => {
        return this.organiser.organise(data)
      })
    );
  }
}
