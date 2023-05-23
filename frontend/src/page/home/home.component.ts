import {Component} from '@angular/core';
import {AbstractPlanningService} from "../../services/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";
import {VMListPlanning} from "../../vm/VMListPlanning";
import {FilterPlanningsService} from "../../services/FilterPlanningsService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  vm: VMListPlanning;


  constructor(dataService: AbstractPlanningService, confService: AbstractConferenceService, filterPlannings: FilterPlanningsService) {
    this.vm = new VMListPlanning(dataService, confService, filterPlannings);
  }


  ngOnInit(): void {
    this.vm.init()


  }
}
