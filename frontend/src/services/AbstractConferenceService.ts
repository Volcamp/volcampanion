import {Observable} from "rxjs";
import {Conference} from "../data/dto/Conference";

export abstract class AbstractConferenceService {
  abstract getCurrentConference(): Observable<Conference | undefined>

}
