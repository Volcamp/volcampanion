import {Planning, PlanningType} from "../data/dto/input/Planning";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";
import {FilterPlanningsService} from "../services/FilterPlanningsService";
import {FilterPlanningEventArgs} from "../event/FilterPlanningEventArgs";
import {Observable} from "rxjs";
import {compareEqualDateAndTime} from "../common/DateFunc";
import {roomPosition} from "../common/RoomPosition";
import {TalkPlanning} from "../data/dto/input/TalkPlanning";

export class VMPlannings {
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]
  dates: Date[] = [];
  noConnection: boolean = false

  constructor(private filterPlannings: FilterPlanningsService) {

  }

  initPlanning(observable: Observable<Planning[]>) {
    observable.subscribe({
        next: plannings => {
          this.planningsNoFilter = plannings;
          this.plannings = plannings;

          this.filterPlannings.eventEmitter.on((data: FilterPlanningEventArgs) => {
            this.plannings = this.filterPlannings.filter(this.planningsNoFilter, data);
          });
          const uniqueDates: Date[] = [];
          const seenDates: string[] = [];

          this.plannings.map(planning => planning.schedule).forEach((date: Date) => {
            const dateString = date.toISOString(); // Convert date to a string representation
            if (!seenDates.includes(dateString)) {
              uniqueDates.push(date);
              seenDates.push(dateString);
            }
          });
          this.dates = uniqueDates;
        },
        error: (err) => {
          console.log("ERORORORORORRO", err)
          this.noConnection = true;
        }
      },
    );
  }

  getByDate(date: Date): Planning[] {
    const plannings = this.plannings.filter(planning => {
      return compareEqualDateAndTime(planning.schedule, date);
    });
    if (plannings.some(planning => {
      if (planning !== undefined) {
        return planning.getType() !== PlanningType.DELIMITER_DAY && plannings[0].getType() !== PlanningType.BREAK;
      }
      return true
    })) {
      const planningsOrder: Planning[] = [];
      for (let i = 0; i < 4; i++) {
        // @ts-ignore
        planningsOrder.push(undefined); // <-|----- Be careful the planning can contain undefined
      }
      plannings.forEach(planning => {
        planningsOrder.splice(roomPosition((planning as TalkPlanning).room?.name), 1, planning);
      });
      return planningsOrder;
    } else {
      return plannings;
    }
  }
}
