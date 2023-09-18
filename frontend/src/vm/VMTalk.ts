import {ActivatedRoute} from "@angular/router";
import {AbstractTalkService} from "../services/abstract/AbstractTalkService";
import {Talk} from "../data/dto/input/Talk";
import {getColorTheme, getIconFormat} from "../common/ColorThemeAndTypeEmoji";
import {DataParamService} from "../services/DataParamService";
import {FeedbackTalkInitEventArgs} from "../event/FeedbackTalkInitEventArgs";
import {FeedbackInitService} from "../services/FeedbackInitService";
import {Room} from "../data/dto/input/Room";

export class VMTalk {
  talk: Talk | undefined | null = null
  room: Room | undefined
  planningTime: string = "";
  colorTheme: string = "";
  iconFormat: string = "";
  noConnection: boolean = false;

  constructor(private route: ActivatedRoute, private dataService: AbstractTalkService,
              private dataParamService: DataParamService, private feedbackInitService: FeedbackInitService) {
    this.talk = this.dataParamService.storageParam?.talk;
    this.room = this.dataParamService.storageParam?.room;
    this.planningTime = this.dataParamService.storageParam?.planningTime;
  }

  init() {
    const routeParams = this.route.snapshot.paramMap;
    const talkIdFromRoute = routeParams.get('talkId');

    if ((this.talk === undefined) ||
      this.talk!.id.toString() !== talkIdFromRoute) {
      this.dataService.getTalkById(talkIdFromRoute!).subscribe({
        next: (talkPlanning) => {
          this.talk = talkPlanning;
          this.colorTheme = getColorTheme(this.talk!.theme!.name);
          this.iconFormat = getIconFormat(this.talk!.format!.type);
        },
        error: () => {
          this.noConnection = true;
        }
      });
    } else {
      this.colorTheme = getColorTheme(this.talk!.theme!.name)
      this.iconFormat = getIconFormat(this.talk!.format!.type)
    }
    if (talkIdFromRoute != null) {
      this.feedbackInitService.eventEmitterFeedback.emit(new FeedbackTalkInitEventArgs(talkIdFromRoute))
    }
  }
}
