import {TalkPlanning} from "../dto/TalkPlanning";
import {ActivatedRoute} from "@angular/router";
import {DataParamService} from "../../services/data-param.service";
import {AbstractTalkService} from "../../services/AbstractTalkService";
import {NavigationService} from "../../services/NavigationService";
import {Talk} from "../dto/Talk";
import {getColorTheme, getIconFormat} from "../../common/ColorThemeAndTypeEmoji";

export class VMTalk {
  talk: Talk | undefined | null = null
  colorTheme: string = "";
  iconFormat: string = ""

  constructor(private route: ActivatedRoute, private dataService: AbstractTalkService, private dataParamService: DataParamService) {
    this.talk = dataParamService.storageParam

  }

  init() {
    const routeParams = this.route.snapshot.paramMap;
    const talkIdFromRoute = routeParams.get('talkId');

    if ((this.talk === undefined) ||
      this.talk!.id.toString() !== talkIdFromRoute) {
      this.dataService.getTalkById(talkIdFromRoute!).subscribe(talkPlanning => {
        this.talk = talkPlanning;
        this.colorTheme = getColorTheme(this.talk!.theme!.name);
        this.iconFormat = getIconFormat(this.talk!.format!.type);
      })
    } else {
      this.colorTheme = getColorTheme(this.talk!.theme!.name)
      this.iconFormat = getIconFormat(this.talk!.format!.type)
    }

  }
}
