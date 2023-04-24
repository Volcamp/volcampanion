import {Planning} from "../DTO/Planning";

export abstract class DataService {
  abstract providePlans(): Promise<Planning[]>
}
