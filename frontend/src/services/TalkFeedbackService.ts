import {Injectable} from "@angular/core";
import {EnvironmentService} from "./EnvironmentService";
import {RequestManager} from "../data/RequestManager";
import {catchError, map, Observable, of} from "rxjs";
import {APIRoutes} from "../data/APIRoutes";
import {AbstractTalkFeedbackService} from "./abstract/AbstractTalkFeedbackService";
import {Feedback} from "../data/dto/input/Feedback";

@Injectable()
export class TalkFeedbackService implements AbstractTalkFeedbackService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  addFeedback(feedback: Feedback, idTalk: string): Observable<boolean> {
    return this.requestManager.post<Feedback>(this.env.getApiUrl() + APIRoutes.USER + APIRoutes.TALKS + idTalk  + "/"  +
      APIRoutes.FEEDBACK, feedback).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      }));
  }

  getFeedback(idTalk: string): Observable<Feedback[]> {
    return this.requestManager.get<Feedback[]>(this.env.getApiUrl() + APIRoutes.USER + APIRoutes.TALKS + idTalk + "/" +
      APIRoutes.FEEDBACK);
  }

  removeFeedback(idTalk: string): Observable<boolean> {
    return this.requestManager.delete<string>(this.env.getApiUrl() + APIRoutes.USER + APIRoutes.TALKS + idTalk  + "/"  +
      APIRoutes.FEEDBACK).pipe(
      map(() => true),
      catchError(() => {
        return of(false)
      }));
  }
}
