import {DataService} from "../DataService";
import {TALK_DATA} from "./Stub";
import {Plan} from "../../DTO/Plan";

export class StubService extends DataService{
  providePlansList(): Plan[] {
    return TALK_DATA;
  }
}
