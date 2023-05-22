import {Component} from '@angular/core';
import {Planning} from "../../data/dto/Planning";
import {FilterPlanningEventArgs} from "../../event/FilterPlanningEventArgs";
import {FilterPlanningsService} from "../../services/filter-plannings.service";
import {AbstractPlanningService} from "../../services/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";
import {VMListPlanning} from "../../data/vm/VMListPlanning";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  vm : VMListPlanning;


  constructor( dataService: AbstractPlanningService,  confService: AbstractConferenceService,  filterPlannings: FilterPlanningsService) {
    this.vm= new VMListPlanning(dataService,confService,filterPlannings);
  }



  ngOnInit(): void {
    this.vm.init()


  }
}
