import {Planning} from "../data/dto/Planning";
import {AbstractPlanningService} from "../services/AbstractPlanningService";
import {AbstractConferenceService} from "../services/AbstractConferenceService";
import {FilterPlanningEventArgs} from "../event/FilterPlanningEventArgs";
import {FilterPlanningsService} from "../services/FilterPlanningsService";

export class VMListPlanning {
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]

  constructor(private dataService: AbstractPlanningService, private confService: AbstractConferenceService, private filterPlannings: FilterPlanningsService) {

  }

  init() {
    this.confService.getCurrentConference().subscribe(conf => {
      this.dataService.getPlannings(conf!.id.toString()).subscribe(plannings => {
          this.planningsNoFilter = plannings;
          this.plannings = plannings;

          this.filterPlannings.eventEmitter.on((data: FilterPlanningEventArgs) => {
            this.plannings = this.filterPlannings.filter(this.planningsNoFilter, data);
          })
        }
      );
    })
  }
}
