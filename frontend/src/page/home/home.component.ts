import {Component} from '@angular/core';
import {AbstractPlanningService} from "../../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {VMListPlanning} from "../../vm/VMListPlanning";
import {FilterPlanningsService} from "../../services/FilterPlanningsService";
import {AbstractTalkFavoriteService} from "../../services/abstract/AbstractTalkFavoriteService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  vm: VMListPlanning;


  constructor(dataService: AbstractPlanningService, favoriteService: AbstractTalkFavoriteService , confService: AbstractConferenceService, filterPlannings: FilterPlanningsService) {
    this.vm = new VMListPlanning(dataService,  confService, filterPlannings);
  }


  ngOnInit(): void {
    this.vm.init()


  }
}
