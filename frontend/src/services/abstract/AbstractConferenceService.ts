import {Observable} from "rxjs";
import {Conference} from "../../data/dto/input/Conference";
import {CreateConference} from "../../data/dto/output/CreateConference";

export abstract class AbstractConferenceService {
  abstract getCurrentConference(): Observable<Conference>

  abstract getConferences(): Observable<Conference[]>

  abstract addConference(Conference: CreateConference): Observable<boolean>

  abstract deleteConference(idConference: string): Observable<boolean>

  abstract putConference(Conference: CreateConference): Observable<boolean>


}
