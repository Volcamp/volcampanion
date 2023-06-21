import {AbstractPlanningService} from "../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";
import {FilterPlanningsService} from "../services/FilterPlanningsService";
import {VMPlannings} from "./VMPlannings";

export class VMListPlanning extends VMPlannings {


  constructor(private dataService: AbstractPlanningService, private confService: AbstractConferenceService,
              filterPlannings: FilterPlanningsService) {
    super(filterPlannings);

  }

  init() {
    this.confService.getCurrentConference().subscribe({
        next: conf => {
          this.initPlanning(this.dataService.getPlannings(conf.id.toString()));
        },
        error: () => {
          this.noConnection = true;
        }
      }
    );
  }
}
