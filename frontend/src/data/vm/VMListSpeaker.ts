import {DataService} from "../services-datas/DataService";
import {CurrentConferenceService} from "../services-datas/api-datas/current-conference.service";
import {Speaker} from "../dto/Speaker";

export class VMListSpeaker{
  speakers!: Speaker[]

  constructor(private dataService: DataService, private confService: CurrentConferenceService) {

    this.confService.getActiveId().subscribe(conf => {
        this.dataService.provideSpeakers(conf.id.toString()).subscribe((speakers => this.speakers = speakers))
      }
    );
  }

}
