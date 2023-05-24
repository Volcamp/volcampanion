import {AbstractPlanningService} from "../services/AbstractPlanningService";
import {AbstractConferenceService} from "../services/AbstractConferenceService";
import {FilterPlanningsService} from "../services/FilterPlanningsService";
import {Talk} from "../data/dto/Talk";
import {AbstractTalkService} from "../services/AbstractTalkService";

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
