import {Component} from '@angular/core';
import {Planning} from "../../data/dto/Planning";
import {FilterPlanningEventArgs} from "../../event/FilterPlanningEventArgs";
import {FilterPlanningsService} from "../../services/filter-plannings.service";
import {AbstractPlanningService} from "../../services/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";
import {FilterPlanningEvent} from "../../event/FilterPlanningEvent";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  planningsNoFilter: Planning[] = []
  plannings!: Planning[]


  constructor(private dataService: AbstractPlanningService, private confService: AbstractConferenceService, private filterPlannings: FilterPlanningsService) {
  }

  ngOnInit(): void {
    this.confService.getCurrentConference().subscribe(conf => {
      this.dataService.getPlannings(conf!.id.toString()).subscribe(plannings => {
          this.planningsNoFilter = plannings;
          this.plannings = plannings;

          this.filterPlannings.eventEmitter.on((data: FilterPlanningEventArgs) => {
            this.plannings = this.filterPlannings.filter(this.planningsNoFilter, data);
          })
        }
      );
    })

  }
}
