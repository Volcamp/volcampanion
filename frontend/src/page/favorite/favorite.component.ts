import { Component } from '@angular/core';
import {VMFavorite} from "../../data/vm/VMFavorite";
import {VMFavoritePage} from "../../data/vm/VMFavoritePage";
import {AbstractTalkFavoriteService} from "../../services/AbstractTalkFavoriteService";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";
import {FilterPlanningsService} from "../../services/filter-plannings.service";
import {UserService} from "../../services/UserService";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent {
  vm : VMFavoritePage;

  constructor(dataService: AbstractTalkFavoriteService, confService: AbstractConferenceService, filterPlannings: FilterPlanningsService, userService: UserService) {
    this.vm = new VMFavoritePage(dataService,confService,filterPlannings,userService);
  }

}
