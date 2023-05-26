import {ActivatedRoute} from "@angular/router";
import {AbstractTalkService} from "../services/abstract/AbstractTalkService";
import {Talk} from "../data/dto/input/Talk";
import {getColorTheme, getIconFormat} from "../common/ColorThemeAndTypeEmoji";
import {DataParamService} from "../services/DataParamService";

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
