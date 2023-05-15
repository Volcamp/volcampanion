import {DataService} from "../services-datas/DataService";
import {CurrentConferenceService} from "../services-datas/api-datas/current-conference.service";
import {compareSchedule} from "../../general-volcamp/CompareTalkPlan";
import {EventFilterPlanning} from "../../event/EventFilterPlanning";
import {Planning} from "../dto/Planning";
import {FilterPlanningsService} from "../../services/filter-plannings.service";

export class VMListPlanning{
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]
  constructor(private dataService: DataService, private confService: CurrentConferenceService, private filterPlannings: FilterPlanningsService) {
    this.confService.getActiveId().subscribe(conf => {
      this.dataService.providePlannings(conf.id.toString()).subscribe(plannings => {
          this.planningsNoFilter = plannings.sort(compareSchedule);
          this.plannings = plannings.sort(compareSchedule);

          this.filterPlannings.eventEmitter.on(EventFilterPlanning.name, (data: EventFilterPlanning) => {
            this.plannings = this.filterPlannings.filter(this.planningsNoFilter, data.data);
          })
        }
      );
    })
  }
}
