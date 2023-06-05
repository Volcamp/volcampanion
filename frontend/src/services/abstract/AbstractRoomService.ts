import {Observable} from "rxjs";
import {Room} from "../../data/dto/input/Room";

export abstract class AbstractRoomService {
  abstract getRoom(idConf: string): Observable<Room[]>
}
