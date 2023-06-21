import {Component, OnInit} from '@angular/core';
import {VMFavoritePage} from "../../vm/VMFavoritePage";
import {AbstractTalkFavoriteService} from "../../services/abstract/AbstractTalkFavoriteService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {UserService} from "../../services/UserService";
import {FilterPlanningsService} from "../../services/FilterPlanningsService";
import {Planning, PlanningType} from "../../data/dto/input/Planning";
import {compareEqualDateAndTime} from "../../common/DateFunc";
import {roomPosition} from "../../common/RoomPosition";
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent implements OnInit{
  vm: VMFavoritePage;

  constructor(dataService: AbstractTalkFavoriteService, confService: AbstractConferenceService, filterPlannings: FilterPlanningsService, userService: UserService) {
    this.vm = new VMFavoritePage(dataService, confService, filterPlannings, userService);
  }

  ngOnInit(): void {
    this.vm.init();
  }

  getByDate(date: Date): Planning[] {
    return this.vm.getByDate(date);
  }

}
