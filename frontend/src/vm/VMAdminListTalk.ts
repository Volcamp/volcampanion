import {AbstractPlanningService} from "../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";
import {FilterPlanningsService} from "../services/FilterPlanningsService";
import {Talk} from "../data/dto/input/Talk";
import {AbstractTalkService} from "../services/abstract/AbstractTalkService";

export class VMAdminListTalk {
  talks: Talk[] = []

  constructor(private dataService: AbstractTalkService, private confService: AbstractConferenceService) {

  }

  init() {
    this.confService.getCurrentConference().subscribe(conf => {
        this.dataService.getTalks(conf!.id.toString()).subscribe((talks => this.talks = talks))
      }
    )
  }
}
