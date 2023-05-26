import {UserService} from "../services/UserService";
import {AbstractTalkFavoriteService} from "../services/abstract/AbstractTalkFavoriteService";
import {LogEventArgs} from "../event/LogEventArgs";
import {Planning} from "../data/dto/input/Planning";
import {compareTalkPlanning} from "../common/CompareTalkPlan";

export class VMFavorite {
  logged: boolean;
  inFavorite!: boolean;

  constructor(private userService: UserService, private dataService: AbstractTalkFavoriteService,
              private planning: Planning) {
    this.logged = userService.isLogged();
    userService.logEventEmitter.on((data: LogEventArgs) => {
      this.logged = data.IsLog
    });
    dataService.getFavorites().subscribe(plannings => {
      this.inFavorite = plannings.some(planning => {
        return compareTalkPlanning(planning, this.planning);
      })

    })
  }

  removeFavorite() {
    if (this.logged) {
      this.dataService.removeFromFavorite(this.planning);
      this.inFavorite = false;
    }
  }

  addFavorite() {
    if (this.logged) {
      this.dataService.addToFavorite(this.planning);
      this.inFavorite = true;
    }
  }
}
