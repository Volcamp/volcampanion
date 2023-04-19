import {Talk} from "./Talk";
import {Room} from "./Room";

export interface TalkPlan {
  room: Room;
  talk: Talk;
  schedule: Date;
}
