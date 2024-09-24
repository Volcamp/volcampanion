import {Component, OnInit} from '@angular/core';
import {Planning} from "../../data/dto/input/Planning";
import {compareEqualDate, compareEqualDateAndTime} from "../../common/DateFunc";
import {roomPosition} from "../../common/RoomPosition";
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";
import {LocalStorageFavoriteService} from "../../services/LocalStorageFavoriteService";
import {DividerPlanning} from "../../data/dto/input/DividerPlanning";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent implements OnInit {
  favoriteList: any[] = [];
  dates: any[] = [];
  days: any[] = [];

  constructor(private localStorageFavoriteService: LocalStorageFavoriteService) {
  }

  ngOnInit(): void {
    this.favoriteList = this.localStorageFavoriteService.getFavoriteList();
    this.dates = this.localStorageFavoriteService.getDatesList();
    this.days = this.localStorageFavoriteService.getDaysList();
  }

  getByDate(date: Date): Planning[] {
    const plannings = this.favoriteList.filter(planning => {
      return compareEqualDateAndTime(new Date(planning.schedule), new Date(date));
    });
    const planningsOrder: Planning[] = [];

    plannings.forEach(planning => {
      planningsOrder.splice(roomPosition((planning as TalkPlanning).room?.name), 1, planning);
    });
    let res: Planning[] = planningsOrder.map(elt => TalkPlanning.fromStorage(elt));
    return res;
  }

}
