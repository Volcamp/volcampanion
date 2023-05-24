import {Observable} from "rxjs";
import {Talk} from "../data/dto/Talk";

export abstract class AbstractTalkService {
  abstract getTalkById(idTalk: string): Observable<Talk>
  abstract getTalks(idConf: string): Observable<Talk[]>


}
