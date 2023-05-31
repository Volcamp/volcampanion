import {Observable} from "rxjs";
import {Talk} from "../../data/dto/input/Talk";
import {CreateTalk} from "../../data/dto/output/CreateTalk";

export abstract class AbstractTalkService {
  abstract getTalkById(idTalk: string): Observable<Talk>

  abstract getTalks(idConf: string): Observable<Talk[]>

  abstract addTalk(talk: CreateTalk): Observable<boolean>

  abstract deleteTalk(idTalk: string): Observable<boolean>

  abstract putTalk(talk: CreateTalk): Observable<boolean>
}
