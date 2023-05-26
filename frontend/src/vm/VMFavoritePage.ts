import {Planning} from "../data/dto/input/Planning";
import {FilterPlanningsService} from "../services/FilterPlanningsService";
import {UserService} from "../services/UserService";
import {AbstractTalkFavoriteService} from "../services/abstract/AbstractTalkFavoriteService";
import {FilterPlanningEventArgs} from "../event/FilterPlanningEventArgs";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";

export class VMFavoritePage {
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]

  constructor(private dataService: AbstractTalkFavoriteService, private confService: AbstractConferenceService, private filterPlannings: FilterPlanningsService, private userService: UserService) {
  }

  init() {
    this.confService.getCurrentConference().subscribe(conf => {
      this.dataService.getFavorites(conf!.id.toString(), true).subscribe(plannings => {
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
