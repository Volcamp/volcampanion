import {AbstractRoomService} from "./abstract/AbstractRoomService";
import {Injectable} from "@angular/core";
import {EnvironmentService} from "./EnvironmentService";
import {RequestManager} from "../data/RequestManager";
import {APIRoutes} from "../data/APIRoutes";
import {Observable} from "rxjs";
import {Room} from "../data/dto/input/Room";

@Injectable()
export class RoomService implements AbstractRoomService {
  constructor(private env: EnvironmentService, private requestManager: RequestManager) {
  }

  getRoom(idConf: string): Observable<Room[]> {
    return this.requestManager.get<Room[]>(this.env.getApiUrl() + APIRoutes.ROOM + APIRoutes.ID_CONF + idConf);
  }

}
