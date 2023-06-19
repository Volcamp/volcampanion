import {Component} from '@angular/core';
import {AbstractPlanningService} from "../../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {VMListPlanning} from "../../vm/VMListPlanning";
import {FilterPlanningsService} from "../../services/FilterPlanningsService";
import {AbstractTalkFavoriteService} from "../../services/abstract/AbstractTalkFavoriteService";
import {Planning} from "../../data/dto/input/Planning";
import {compareEqualDateAndTime} from "../../common/DateFunc";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  vm: VMListPlanning;


  constructor(dataService: AbstractPlanningService, favoriteService: AbstractTalkFavoriteService, confService: AbstractConferenceService, filterPlannings: FilterPlanningsService) {
    this.vm = new VMListPlanning(dataService, confService, filterPlannings);
  }


  ngOnInit(): void {
    this.vm.init()
  }

  getByDate(date: Date): Planning[] {
    return this.vm.plannings.filter(planning => {
      return compareEqualDateAndTime(planning.schedule, date);
    })

  }
}
