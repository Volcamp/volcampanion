import {TalkPlanning} from "../dto/TalkPlanning";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services-datas/DataService";
import {DataParamService} from "../../services/data-param.service";
import {getColorTheme, getIconFormat} from "../../general-volcamp/ColorThemeAndTypeEmoji";

export class VMTalkPlanning {
  talkPlanning: TalkPlanning | undefined | null = null
  colorTheme: string = "";
  iconFormat: string = ""

  constructor(private route: ActivatedRoute, private dataService: DataService, private dataParamService: DataParamService) {
    this.talkPlanning = dataParamService.storageParam

  }

  init() {
    const routeParams = this.route.snapshot.paramMap;
    const talkIdFromRoute = Number(routeParams.get('talkId'));

    if ((this.talkPlanning === undefined) || this.talkPlanning?.talk === undefined) {
      this.dataService.getTalkById(talkIdFromRoute).subscribe(talkPlanning => {
        this.talkPlanning = talkPlanning;
        this.colorTheme = getColorTheme(this.talkPlanning!.talk!.theme!.name);
        this.iconFormat = getIconFormat(this.talkPlanning!.talk!.format!.type);
      })
    } else if (this.talkPlanning!.talk.id !== talkIdFromRoute) {
      this.dataService.getTalkById(talkIdFromRoute).subscribe(talkPlanning => {
        this.talkPlanning = talkPlanning;
        this.colorTheme = getColorTheme(this.talkPlanning!.talk!.theme!.name);
        this.iconFormat = getIconFormat(this.talkPlanning!.talk!.format!.type);
      })
    } else {
      this.colorTheme = getColorTheme(this.talkPlanning!.talk!.theme!.name)
      this.iconFormat = getIconFormat(this.talkPlanning!.talk!.format!.type)
    }

  }
}
