import {Injectable} from "@angular/core";
import {EventEmitter} from "../event/EventEmitter";

@Injectable()
export class PlanningExternalDropService {
  eventEmitter: EventEmitter<PlanningExternalDropService> = new EventEmitter<PlanningExternalDropService>(PlanningExternalDropService);
}
