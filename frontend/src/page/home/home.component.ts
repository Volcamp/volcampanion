import {Component} from '@angular/core';
import {DataService} from "../../data/services-datas/DataService";
import {Planning} from "../../data/dto/Planning";
import {compareSchedule} from "../../general-volcamp/CompareTalkPlan";
import {CurrentConferenceService} from "../../data/services-datas/api-datas/current-conference.service";
import {EventFilterPlanning} from "../../event/EventFilterPlanning";
import {FilterPlanningsService} from "../../services/filter-plannings.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]


  constructor(private dataService: DataService, private confService: CurrentConferenceService, private filterPlannings: FilterPlanningsService) {


  }

  ngOnInit(): void {
    this.confService.getActiveId().subscribe(conf => {
      this.dataService.providePlannings(conf.id.toString()).subscribe(plannings => {
          this.plannings = plannings.sort(compareSchedule);
          this.planningsNoFilter = this.plannings
          this.filterPlannings.eventEmitter.on(EventFilterPlanning.name, (data: EventFilterPlanning) => {
            this.plannings = this.filterPlannings.filter(this.planningsNoFilter, data.data);
            console.log(this.plannings)
          })
        }
      );
    })

  }
}
