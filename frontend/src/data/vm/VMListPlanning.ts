import {Planning} from "../dto/Planning";
import {AbstractPlanningService} from "../../services/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";
import {FilterPlanningsService} from "../../services/filter-plannings.service";
import {FilterPlanningEventArgs} from "../../event/FilterPlanningEventArgs";

export class VMListPlanning {
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]

  constructor(private dataService: AbstractPlanningService, private confService: AbstractConferenceService, private filterPlannings: FilterPlanningsService ) {

  }
  init(){
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
