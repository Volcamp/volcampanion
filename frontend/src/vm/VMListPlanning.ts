import {Planning} from "../data/dto/input/Planning";
import {AbstractPlanningService} from "../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";
import {FilterPlanningEventArgs} from "../event/FilterPlanningEventArgs";
import {FilterPlanningsService} from "../services/FilterPlanningsService";
import {AbstractTalkFavoriteService} from "../services/abstract/AbstractTalkFavoriteService";

export class VMListPlanning {
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]

  constructor(private dataService: AbstractPlanningService, private favoriteService: AbstractTalkFavoriteService, private confService: AbstractConferenceService, private filterPlannings: FilterPlanningsService) {

  }

  init() {
    this.confService.getCurrentConference().subscribe(conf => {
      this.dataService.getPlannings(conf.id.toString()).subscribe(plannings => {
          this.planningsNoFilter = plannings;
          this.plannings = plannings;

          this.filterPlannings.eventEmitter.on((data: FilterPlanningEventArgs) => {
            this.plannings = this.filterPlannings.filter(this.planningsNoFilter, data);
          })
        }
      );
      this.favoriteService.getFavorites(conf.id.toString(),true).subscribe();
    })
  }
}
