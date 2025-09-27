import {Injectable} from '@angular/core';
import {RequestManager} from "../data/RequestManager";
import {catchError, map, Observable, of} from "rxjs";
import {Conference} from "../data/dto/input/Conference";
import {EnvironmentService} from "./EnvironmentService";
import {APIRoutes} from "../data/APIRoutes";
import {AbstractConferenceService} from "./abstract/AbstractConferenceService";
import {CreateConference} from "../data/dto/output/CreateConference";
import {HttpResponse} from "@angular/common/http";


export const ACTIVE_ID_CONF = "activeIdConf"

@Injectable({
  providedIn: 'root'
})
export class ConferenceService implements AbstractConferenceService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getCurrentConference(): Observable<Conference> {
    // Force refresh from API instead of using cache during development
    return this.requestManager.get<Conference>(this.env.getApiUrl() + APIRoutes.CONFERENCE + APIRoutes.CONFERENCE_ACTIVE).pipe(
      map(conf => {
          window.localStorage.setItem(ACTIVE_ID_CONF, JSON.stringify(conf));
          return conf
        }
      ));
  }

  getConferences(): Observable<Conference[]> {
    return this.requestManager.get<Conference[]>(this.env.getApiUrl() + APIRoutes.CONFERENCE);
  }


  addConference(Conference: CreateConference): Observable<boolean> {
    return this.requestManager.post<HttpResponse<CreateConference>>(this.env.getApiUrl() + APIRoutes.CONFERENCE, Conference).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }

  deleteConference(idConference: string): Observable<boolean> {
    return this.requestManager.delete<CreateConference>(this.env.getApiUrl() + APIRoutes.CONFERENCE + idConference).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }

  putConference(Conference: CreateConference): Observable<boolean> {
    return this.requestManager.put<CreateConference>(this.env.getApiUrl() + APIRoutes.CONFERENCE, Conference).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }
}
