import {Speaker} from "../dto/Speaker";
import {SocialMedia} from "../../general-volcamp/SocialMedia";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services-datas/DataService";
import {DataParamService} from "../../services/data-param.service";

export class VMSpeaker{

  speaker: Speaker | null | undefined = null
  twitter = SocialMedia.TWITTER
  linkedin = SocialMedia.LINKEDIN

  constructor(private route: ActivatedRoute, private dataService: DataService, private dataParamService: DataParamService) {
    this.speaker = dataParamService.storageParam

  }

  init() {
    const routeParams = this.route.snapshot.paramMap;
    const speakerIdFromRoute = Number(routeParams.get('speakerId'));

    if ((this.speaker === undefined)) {
      this.dataService.getSpeakerById(speakerIdFromRoute).subscribe(speaker => this.speaker = speaker)
    } else if (this.speaker!.id !== speakerIdFromRoute) {
      this.dataService.getSpeakerById(speakerIdFromRoute).subscribe(speaker => this.speaker = speaker)
    }
  }
}
