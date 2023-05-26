import {Component, OnInit} from '@angular/core';
import {VMFavoritePage} from "../../vm/VMFavoritePage";
import {AbstractTalkFavoriteService} from "../../services/abstract/AbstractTalkFavoriteService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {UserService} from "../../services/UserService";
import {FilterPlanningsService} from "../../services/FilterPlanningsService";

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

}
