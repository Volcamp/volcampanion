import {UserService} from "../services/UserService";
import {AbstractTalkFavoriteService} from "../services/abstract/AbstractTalkFavoriteService";
import {LogEventArgs} from "../event/LogEventArgs";
import {Planning} from "../data/dto/input/Planning";
import {compareTalkPlanning} from "../common/CompareTalkPlan";
import {EventEmitter} from "@angular/core";

export class VMFavorite {
  logged: boolean;
  inFavorite!: boolean;

  constructor(private userService: UserService, private dataService: AbstractTalkFavoriteService,
              private planning: Planning, private capacity: number, private capacityChange: EventEmitter<number>) {
    this.logged = userService.isLogged();
    userService.logEventEmitter.on((data: LogEventArgs) => {
      this.logged = data.IsLog
    });
    if(this.logged){
      dataService.getFavorites().subscribe(plannings => {
        this.inFavorite = plannings.some(planning => {
          return compareTalkPlanning(planning, this.planning);
        });
      });
    }

  }

  removeFavorite() {
    if (this.logged) {
      this.dataService.removeFromFavorite(this.planning).subscribe( data => {
          this.inFavorite = ! data;
          if(data){
            this.capacityChange.emit(--this.capacity);
          }
        }
      );
    }
  }

  addFavorite() {
    if (this.logged) {
      this.dataService.addToFavorite(this.planning).subscribe( data => {
          this.inFavorite = data;
          if(data){
            this.capacityChange.emit(++this.capacity);
          }
        }
      );

    }
  }
}
