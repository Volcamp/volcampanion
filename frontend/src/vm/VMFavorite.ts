import {UserService} from "../services/UserService";
import {AbstractTalkFavoriteService} from "../services/AbstractTalkFavoriteService";
import {LogEventArgs} from "../event/LogEventArgs";

export class VMFavorite {
  logged: boolean;
  inFavorite: boolean = false;

  constructor(private userService: UserService, private dataService: AbstractTalkFavoriteService) {
    this.logged = userService.isLogged();
    userService.logEventEmitter.on((data: LogEventArgs) => {
      this.logged = data.IsLog
    });
  }

  removeFavorite(talkId: number) {
    if (this.logged) {
      this.dataService.removeFromFavorite(talkId);
      this.inFavorite = false;
    }
  }

  addFavorite(talkId: number) {
    if (this.logged) {
      this.dataService.addToFavorite(talkId);
      this.inFavorite = true;
    }
  }
}
