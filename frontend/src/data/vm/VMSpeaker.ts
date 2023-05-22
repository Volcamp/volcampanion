import {Speaker} from "../dto/Speaker";
import {ActivatedRoute} from "@angular/router";
import {DataParamService} from "../../services/data-param.service";
import {SocialMedia} from "../../common/SocialMedia";
import {AbstractSpeakerService} from "../../services/AbstractSpeakerService";

export class VMSpeaker {

  speaker: Speaker | null | undefined = null
  twitter = SocialMedia.TWITTER
  linkedin = SocialMedia.LINKEDIN

  constructor(private route: ActivatedRoute, private dataService: AbstractSpeakerService, private dataParamService: DataParamService) {
    this.speaker = dataParamService.storageParam

  }

  init() {
    const routeParams = this.route.snapshot.paramMap;
    const speakerIdFromRoute = routeParams.get('speakerId');

    if ((this.speaker === undefined)) {
      this.dataService.getSpeakerById(speakerIdFromRoute!).subscribe(speaker => this.speaker = speaker)
    } else if (this.speaker!.id.toString() !== speakerIdFromRoute) {
      this.dataService.getSpeakerById(speakerIdFromRoute!).subscribe(speaker => this.speaker = speaker)
    }
  }
}
