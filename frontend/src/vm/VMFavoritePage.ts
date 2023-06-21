import {FilterPlanningsService} from "../services/FilterPlanningsService";
import {UserService} from "../services/UserService";
import {AbstractTalkFavoriteService} from "../services/abstract/AbstractTalkFavoriteService";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";
import {VMPlannings} from "./VMPlannings";

export class VMFavoritePage extends VMPlannings {

  constructor(private dataService: AbstractTalkFavoriteService, private confService: AbstractConferenceService,filterPlannings: FilterPlanningsService, private userService: UserService) {
    super(filterPlannings);
  }

  init() {
    this.confService.getCurrentConference().subscribe({
      next: (conf) => {
        this.initPlanning(this.dataService.getFavorites(conf!.id.toString(), true));
      },
      error: () => {
        this.noConnection = true;
      }
    });
  }

}
