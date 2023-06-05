import {Observable} from "rxjs";
import {Conference} from "../../data/dto/input/Conference";

export abstract class AbstractConferenceService {
  abstract getCurrentConference(): Observable<Conference>
  abstract getConferences(): Observable<Conference[]>


}
