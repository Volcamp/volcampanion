import {Observable} from "rxjs";
import {Feedback} from "../../data/dto/input/Feedback";

export abstract class  AbstractTalkFeedbackService {
  abstract addFeedback(feedback: Feedback, idTalk: string): Observable<boolean>;

  abstract removeFeedback(idTalk: string): Observable<boolean>;

  abstract getFeedback(idTalk: string): Observable<Feedback[]>;
}
