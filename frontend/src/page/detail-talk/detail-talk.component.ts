import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {getColorTheme, getIconFormat} from "../../common/ColorThemeAndTypeEmoji";
import {DataParamService} from "../../services/data-param.service";
import {NavigationService} from "../../services/NavigationService";
import {Speaker} from "../../data/dto/Speaker";
import {AbstractTalkService} from "../../services/AbstractTalkService";
import {Talk} from "../../data/dto/Talk";

@Component({
  selector: 'app-detail-talk',
  templateUrl: './detail-talk.component.html',
  styleUrls: ['./detail-talk.component.sass']
})
export class DetailTalkComponent implements OnInit {
  talk: Talk | undefined | null = null
  colorTheme: string = "";
  iconFormat: string = ""

  constructor(private route: ActivatedRoute, private dataService: AbstractTalkService, private dataParamService: DataParamService, private navigation: NavigationService) {
    this.talk = dataParamService.storageParam
  }

  ngOnInit() {
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

  navigate(speaker: Speaker) {
    this.navigation.goToSpeaker(speaker)
  }
}
