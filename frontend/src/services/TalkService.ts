import {APIRoutes} from "../data/APIRoutes";
import {RequestManager} from "../data/RequestManager";
import {Injectable} from "@angular/core";
import {catchError, map, Observable, of} from "rxjs";
import {EnvironmentService} from "./EnvironmentService";
import {AbstractTalkService} from "./abstract/AbstractTalkService";
import {Talk} from "../data/dto/input/Talk";
import {CreateTalk} from "../data/dto/output/CreateTalk";
import {HttpResponse} from "@angular/common/http";

@Injectable()
export class TalkService implements AbstractTalkService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getTalkById(idTalk: string): Observable<Talk> {
    return this.requestManager.get<Talk>(this.env.getApiUrl() + APIRoutes.TALKS + idTalk);
  }

  getTalks(idConf: string): Observable<Talk[]> {
    return this.requestManager.get<Talk[]>(this.env.getApiUrl() + APIRoutes.TALKS + APIRoutes.ID_CONF + idConf);
  }

  addTalk(talk: CreateTalk): Observable<boolean> {
    return this.requestManager.post<HttpResponse<CreateTalk>>(this.env.getApiUrl() + APIRoutes.TALKS, talk).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }

  deleteTalk(idTalk: string): Observable<boolean> {
    return this.requestManager.delete<CreateTalk>(this.env.getApiUrl() + APIRoutes.TALKS + idTalk).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }

  putTalk(talk: CreateTalk): Observable<boolean> {
    return this.requestManager.put<CreateTalk>(this.env.getApiUrl() + APIRoutes.TALKS, talk).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      })
    );
  }
}
