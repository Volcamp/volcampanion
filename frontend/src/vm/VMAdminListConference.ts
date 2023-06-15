import {AbstractTalkService} from "../services/abstract/AbstractTalkService";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";
import {Conference} from "../data/dto/input/Conference";

export class VMAdminListConference {
  currentConference!: Conference;
  conferences: Conference[] = [];

  constructor(private dataService: AbstractConferenceService) {

  }

  init() {
    this.dataService.getConferences().subscribe(data => {
      data.forEach(conference => {
        conference.startDate = new Date(conference.startDate!);
        conference.endDate = new Date(conference.endDate!);

      });
      this.conferences = data;
    });
    this.dataService.getCurrentConference().subscribe(data => {
      this.currentConference = data;
      this.currentConference.startDate = new Date(data.startDate!);
      this.currentConference.endDate = new Date(data.endDate!);
    });
  }
}
