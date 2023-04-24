import {DataService} from "../DataService";
import {TALK_DATA} from "./Stub";
import {Planning} from "../../DTO/Planning";

export class StubService extends DataService {
  async providePlans(): Promise<Planning[]> {
    return TALK_DATA;
  }
}
