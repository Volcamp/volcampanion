import {Speaker} from "../data/dto/input/Speaker";
import {AbstractSpeakerService} from "../services/abstract/AbstractSpeakerService";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";

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
