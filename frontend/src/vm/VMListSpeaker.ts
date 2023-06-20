import {Speaker} from "../data/dto/input/Speaker";
import {AbstractSpeakerService} from "../services/abstract/AbstractSpeakerService";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";

export class VMListSpeaker {
  speakers!: Speaker[]
  noConnection: boolean = false;

  constructor(private dataService: AbstractSpeakerService, private confService: AbstractConferenceService) {

  }

  init() {
    this.confService.getCurrentConference().subscribe({
      next: (conf) => {
        this.dataService.getSpeakers(conf!.id.toString()).subscribe({
          next: (speakers) => {
            this.speakers = speakers;
          },
          error: () => {
            this.noConnection = true;
          }
        });
      },
      error: () => {
        this.noConnection = true;
      }
    });
  }
}
