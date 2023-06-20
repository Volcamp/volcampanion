import {Planning} from "../data/dto/input/Planning";
import {AbstractPlanningService} from "../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";
import {FilterPlanningEventArgs} from "../event/FilterPlanningEventArgs";
import {FilterPlanningsService} from "../services/FilterPlanningsService";
import {catchError, map} from "rxjs";

export class VMListPlanning {
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]
  dates: Date[] = [];
  noConnection: boolean = false

  constructor(private dataService: AbstractPlanningService, private confService: AbstractConferenceService,
              private filterPlannings: FilterPlanningsService) {

  }

  // @ts-ignore
  distinct = (elem, i, arr) => {
    if (arr.indexOf(elem) === i) {
      return elem
    }
  }

  init() {
    this.confService.getCurrentConference().subscribe({
        next: conf => {
          this.dataService.getPlannings(conf.id.toString()).subscribe({
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
              error: () => {
                this.noConnection = true;
              }
            },
          );
        },
        error: () => {
          this.noConnection = true;
        }
      }
    );
  }
}
