import {Speaker} from "../data/dto/input/Speaker";
import {APIRoutes} from "../data/APIRoutes";
import {catchError, map, Observable, of} from "rxjs";
import {RequestManager} from "../data/RequestManager";
import {Injectable} from "@angular/core";
import {EnvironmentService} from "./EnvironmentService";
import {AbstractSpeakerService} from "./abstract/AbstractSpeakerService";
import {HttpResponse} from "@angular/common/http";
import {CreateSpeaker} from "../data/dto/output/CreateSpeaker";

@Injectable()
export class SpeakerService implements AbstractSpeakerService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getSpeakers(idConf: string): Observable<Speaker[]> {
    return this.requestManager.get<Speaker[]>(this.env.getApiUrl() + APIRoutes.SPEAKER + APIRoutes.ID_CONF + idConf);
  }

  getSpeakerById(id: string): Observable<Speaker | undefined> {
    return this.requestManager.get<Speaker>(this.env.getApiUrl() + APIRoutes.SPEAKER + id);
  }

  addSpeaker(speaker: CreateSpeaker): Observable<boolean> {
    return this.requestManager.post<HttpResponse<CreateSpeaker>>(this.env.getApiUrl() + APIRoutes.SPEAKER, speaker).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }

  deleteSpeaker(idTalk: string): Observable<boolean> {
    return this.requestManager.delete<CreateSpeaker>(this.env.getApiUrl() + APIRoutes.SPEAKER + idTalk).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }

  putSpeaker(speaker: CreateSpeaker): Observable<boolean> {
    return this.requestManager.put<CreateSpeaker>(this.env.getApiUrl() + APIRoutes.SPEAKER, speaker).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }
}
