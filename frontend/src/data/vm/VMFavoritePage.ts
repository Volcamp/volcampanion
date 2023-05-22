import {Planning} from "../dto/Planning";
import {FilterPlanningsService} from "../../services/filter-plannings.service";
import {UserService} from "../../services/UserService";
import {AbstractTalkFavoriteService} from "../../services/AbstractTalkFavoriteService";
import {FilterPlanningEventArgs} from "../../event/FilterPlanningEventArgs";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";

export class VMFavoritePage {
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]

  constructor(private dataService: AbstractTalkFavoriteService, private confService: AbstractConferenceService, private filterPlannings: FilterPlanningsService, private userService: UserService) {
  }

  init() {
    this.confService.getCurrentConference().subscribe(conf => {
      this.dataService.getFavorites(conf!.id.toString()).subscribe(plannings => {
          this.planningsNoFilter = plannings != undefined ? plannings : [];
          this.plannings = plannings != undefined ? plannings : [];
          this.filterPlannings.eventEmitter.on((data: FilterPlanningEventArgs) => {
            this.plannings = this.filterPlannings.filter(this.planningsNoFilter, data);
          })
        }
      );
    })
  }

}
