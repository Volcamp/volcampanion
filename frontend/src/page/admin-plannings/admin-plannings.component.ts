import {Component, Input} from '@angular/core';
import {Planning} from "../../data/dto/input/Planning";
import {AbstractPlanningService} from "../../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {Conference} from "../../data/dto/input/Conference";
import {PlanningsInitService} from "../../services/plannings-init.service";
import {PlanningsInitEvent} from "../../event/PlanningsInitEvent";
import {PlanningsInitEventArgs} from "../../event/PlanningsInitEventArgs";

@Component({
  selector: 'app-admin-plannings',
  templateUrl: './admin-plannings.component.html',
  styleUrls: ['./admin-plannings.component.sass']
})
export class AdminPlanningsComponent {
  conf!: Conference;
  plannings!: Planning[];

  constructor(private abstractPlanningService: AbstractPlanningService,private planningsInitService: PlanningsInitService,
              private abstractConferenceService: AbstractConferenceService) {
    abstractConferenceService.getCurrentConference().subscribe(conf => {
      this.conf = conf;
      abstractPlanningService.getPlannings(conf.id.toString()).subscribe(plannings => {
        this.plannings = plannings;
        planningsInitService.eventEmitter.emit(new PlanningsInitEventArgs(this.plannings))
      })

    })
  }
}
