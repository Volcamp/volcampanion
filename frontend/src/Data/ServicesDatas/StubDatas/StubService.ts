import {DataService} from "../DataService";
import {SPEAKER_DATA, TALK_DATA} from "./Stub";
import {Planning} from "../../DTO/Planning";
import {Speaker} from "../../DTO/Speaker";

export class StubService extends DataService {
  async providePlans(): Promise<Planning[]> {
    return Promise.resolve(TALK_DATA);
  }

  async provideSpeakers(): Promise<Speaker[]> {
    return Promise.resolve(SPEAKER_DATA);
  }
}
