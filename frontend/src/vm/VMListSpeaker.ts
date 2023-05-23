import {Speaker} from "../data/dto/Speaker";
import {AbstractSpeakerService} from "../services/AbstractSpeakerService";
import {AbstractConferenceService} from "../services/AbstractConferenceService";

export class VMListSpeaker {
  speakers!: Speaker[]

  constructor(private dataService: AbstractSpeakerService, private confService: AbstractConferenceService) {

  }

  init() {
    this.confService.getCurrentConference().subscribe(conf => {
        this.dataService.getSpeakers(conf!.id.toString()).subscribe((speakers => this.speakers = speakers))
      }
    )
  }
}
