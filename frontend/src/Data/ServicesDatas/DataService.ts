import {Planning} from "../DTO/Planning";
import {Speaker} from "../DTO/Speaker";

export abstract class DataService {
  abstract providePlans(): Promise<Planning[]>
  abstract provideSpeakers(): Promise<Speaker[]>
}
