import {Injectable} from "@angular/core";
import {EventEmitter} from "../event/EventEmitter";
import {PlanningsInitEvent} from "../event/PlanningsInitEvent";

@Injectable()
export class PlanningsInitService {
  eventEmitter: EventEmitter<PlanningsInitEvent> = new EventEmitter<PlanningsInitEvent>(PlanningsInitEvent);
}
