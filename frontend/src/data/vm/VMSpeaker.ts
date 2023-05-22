import {Speaker} from "../dto/Speaker";
import {ActivatedRoute} from "@angular/router";
import {DataParamService} from "../../services/data-param.service";
import {SocialMedia} from "../../common/SocialMedia";

export class VMSpeaker{

  speaker: Speaker | null | undefined = null
  twitter = SocialMedia.TWITTER
  linkedin = SocialMedia.LINKEDIN

  constructor(private route: ActivatedRoute, private dataParamService: DataParamService) {
    this.speaker = dataParamService.storageParam

  }

  init() {
    const routeParams = this.route.snapshot.paramMap;
    const speakerIdFromRoute = Number(routeParams.get('speakerId'));

    if ((this.speaker === undefined)) {

    } else if (this.speaker!.id !== speakerIdFromRoute) {

    }
  }
}
